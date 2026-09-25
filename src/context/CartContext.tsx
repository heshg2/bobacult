import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, SizeOption, AddOnOption, SIZES, ADD_ONS, BUSINESS_INFO } from '../data/menuData';

export interface CartItem {
  id: string; // unique cart line item id
  menuItem: MenuItem;
  size: SizeOption;
  selectedAddOns: AddOnOption[];
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: MenuItem, size?: SizeOption, addOns?: AddOnOption[]) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  generateWhatsAppLink: (customerName?: string, orderType?: 'pickup' | 'delivery', notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bobacult_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bobacult_cart', JSON.stringify(cart));
    } catch {
      // storage error fallback
    }
  }, [cart]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (
    menuItem: MenuItem,
    size: SizeOption = SIZES[0],
    addOns: AddOnOption[] = []
  ) => {
    const addOnTotal = addOns.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = menuItem.price + size.extraPrice + addOnTotal;
    
    // Create consistent signature key to group identical configurations
    const addOnIds = addOns.map((a) => a.id).sort().join(',');
    const itemKey = `${menuItem.id}-${size.id}-${addOnIds}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
          totalPrice: (next[existingIndex].quantity + 1) * unitPrice,
        };
        return next;
      }
      return [
        ...prev,
        {
          id: itemKey,
          menuItem,
          size,
          selectedAddOns: addOns,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === cartItemId) {
            const newQty = i.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...i,
              quantity: newQty,
              totalPrice: newQty * i.unitPrice,
            };
          }
          return i;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.totalPrice, 0);

  const generateWhatsAppLink = (customerName = '', orderType = 'pickup', notes = '') => {
    if (cart.length === 0) {
      return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
        'Hello BobaCult Koswatte! I would like to ask about your bubble tea menu.'
      )}`;
    }

    const lines = [
      `🧋 *NEW ORDER - BOBACULT KOSWATTE*`,
      `---------------------------------`,
      ...cart.map((item, index) => {
        const addOnsText =
          item.selectedAddOns.length > 0
            ? `\n   + ${item.selectedAddOns.map((a) => a.name).join(', ')}`
            : '';
        return `${index + 1}. *${item.menuItem.name}* (${item.size.name} ${item.size.volume}) x${item.quantity} — Rs. ${item.totalPrice.toLocaleString()}${addOnsText}`;
      }),
      `---------------------------------`,
      `*Total Items:* ${totalItems}`,
      `*Total Amount:* Rs. ${subtotal.toLocaleString()}`,
      `*Order Type:* ${orderType === 'delivery' ? '🛵 Delivery' : '🛍️ Takeaway / Pickup'}`,
    ];

    if (customerName.trim()) {
      lines.push(`*Customer Name:* ${customerName.trim()}`);
    }
    if (notes.trim()) {
      lines.push(`*Notes/Instructions:* ${notes.trim()}`);
    }

    lines.push(
      `---------------------------------`,
      `Sent via BobaCult Online Menu`
    );

    const message = lines.join('\n');
    return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        generateWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
