import React from 'react';
import { MenuItem } from '../data/menuData';

interface DrinkIllustrationProps {
  item: MenuItem;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DrinkIllustration: React.FC<DrinkIllustrationProps> = ({
  item,
  size = 'md',
  className = '',
}) => {
  const heightClass = {
    sm: 'h-24 w-16',
    md: 'h-40 w-24',
    lg: 'h-56 w-32',
  }[size];

  // Specific theme presets based on drink category and name
  const isCremeBrulee = item.category === 'creme-brulee' || item.name.includes('Creme Brulee') || item.name.includes('Cream');
  const isSoda = item.category === 'sodas' || item.category === 'lemonades';
  const isMilkshake = item.category === 'milkshakes';
  const isRamyun = item.id.includes('ramyun');
  const isCombo = item.category === 'combos' && !isRamyun;
  const isMatcha = item.name.toLowerCase().includes('matcha');
  const isTaro = item.name.toLowerCase().includes('taro') || item.name.toLowerCase().includes('ube');
  const isBerry = item.name.toLowerCase().includes('berry') || item.name.toLowerCase().includes('strawberry') || item.name.toLowerCase().includes('faluda');

  // Special Graphic for Shin Ramyun Spicy Noodles Bowl
  if (isRamyun) {
    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        <svg viewBox="0 0 100 160" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bowl Shadow */}
          <ellipse cx="50" cy="148" rx="36" ry="6" fill="rgba(0,0,0,0.4)" />
          
          {/* Chopsticks */}
          <path d="M 20 28 L 82 85" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
          <path d="M 28 22 L 86 80" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
          
          {/* Red Hot Shin Ramyun Bowl Shell */}
          <path d="M 12 70 Q 14 135 48 138 Q 82 135 88 70 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <ellipse cx="50" cy="70" rx="38" ry="12" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
          
          {/* Spicy Red Soup */}
          <ellipse cx="50" cy="73" rx="35" ry="10" fill="#991B1B" />
          
          {/* Golden Curled Ramen Noodles */}
          <path d="M 24 74 Q 30 65 38 72 Q 45 78 52 70 Q 60 64 68 72 Q 74 76 76 72" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M 28 78 Q 36 70 44 76 Q 52 82 60 74 Q 68 68 74 76" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 32 82 Q 40 76 48 81 Q 56 86 64 80" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
          
          {/* Scallions / Green garnish */}
          <circle cx="42" cy="72" r="3" fill="#22C55E" />
          <circle cx="56" cy="76" r="2.5" fill="#16A34A" />
          <circle cx="64" cy="70" r="2.5" fill="#4ADE80" />
          <circle cx="36" cy="76" r="2" fill="#22C55E" />

          {/* Steaming heat lines */}
          <path d="M 38 48 Q 34 38 40 28" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 50 44 Q 54 34 48 24" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 62 48 Q 66 38 60 28" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* BobaCult Korean Spicy Emblem */}
          <rect x="36" y="98" width="28" height="14" rx="3" fill="#111827" stroke="#FEF08A" strokeWidth="0.8" />
          <text x="50" y="108" fontSize="4.8" fontWeight="bold" fill="#FEF08A" textAnchor="middle" fontFamily="sans-serif">
            SHIN RAMYUN
          </text>
        </svg>
      </div>
    );
  }

  // Liquid gradients
  const getLiquidFill = () => {
    if (isMatcha && item.name.includes('Strawberry')) {
      return (
        <>
          <stop offset="0%" stopColor="#1E392A" />
          <stop offset="45%" stopColor="#2E6548" />
          <stop offset="50%" stopColor="#FFF1E6" />
          <stop offset="70%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#BE185D" />
        </>
      );
    }
    if (isMatcha) {
      return (
        <>
          <stop offset="0%" stopColor="#F5F5F0" />
          <stop offset="35%" stopColor="#557C55" />
          <stop offset="100%" stopColor="#2D4F35" />
        </>
      );
    }
    if (isTaro) {
      return (
        <>
          <stop offset="0%" stopColor="#F3E8FF" />
          <stop offset="40%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#581C87" />
        </>
      );
    }
    if (item.name.includes('Thai')) {
      return (
        <>
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="30%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#C2410C" />
        </>
      );
    }
    if (item.name.includes('Choco') || item.name.includes('Coffee') || item.name.includes('Milo') || item.name.includes('Cookie')) {
      return (
        <>
          <stop offset="0%" stopColor="#FDF2E9" />
          <stop offset="30%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#381E0E" />
        </>
      );
    }
    if (isBerry) {
      return (
        <>
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="30%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#9F1239" />
        </>
      );
    }
    if (item.name.includes('Mango') || item.name.includes('Peach') || item.name.includes('Passion')) {
      return (
        <>
          <stop offset="0%" stopColor="#FEF9C3" />
          <stop offset="30%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </>
      );
    }
    if (item.name.includes('Apple') || item.name.includes('Honeydew')) {
      return (
        <>
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="30%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#047857" />
        </>
      );
    }
    if (isSoda) {
      return (
        <>
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#F97316" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0.85" />
        </>
      );
    }
    // Default Classic Ceylon Milk Tea
    return (
      <>
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="25%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#78350F" />
      </>
    );
  };

  const gradientId = `drink-grad-${item.id}`;

  return (
    <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
      <svg
        viewBox="0 0 100 160"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            {getLiquidFill()}
          </linearGradient>
          <linearGradient id={`cup-reflection-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="15%" stopColor="white" stopOpacity="0.1" />
            <stop offset="85%" stopColor="white" stopOpacity="0.0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Straw */}
        <path
          d="M 50 6 L 56 45"
          stroke="#FF7200"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 50 6 L 56 45"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Cup Shadow */}
        <ellipse cx="50" cy="154" rx="26" ry="4" fill="rgba(0,0,0,0.3)" />

        {/* Cup Outer Shell */}
        <path
          d="M 22 36 L 30 142 Q 31 150 40 150 L 60 150 Q 69 150 70 142 L 78 36 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1.2"
        />

        {/* Liquid Body */}
        <path
          d="M 24 44 L 31 142 Q 31 148 40 148 L 60 148 Q 69 148 69 142 L 76 44 Q 50 40 24 44 Z"
          fill={`url(#${gradientId})`}
        />

        {/* Milkshake Whipped Cream Swirl */}
        {isMilkshake && (
          <g>
            <path
              d="M 30 36 Q 36 24 46 22 Q 54 22 62 26 Q 70 30 70 36 Z"
              fill="#FFFFFF"
              stroke="#E5E7EB"
              strokeWidth="0.8"
            />
            <path
              d="M 38 28 Q 50 16 54 24 Q 60 22 64 28"
              fill="#FFFBEB"
              stroke="#FDE68A"
              strokeWidth="0.8"
            />
            {/* Colorful sprinkles on whipped cream */}
            <circle cx="44" cy="26" r="1" fill="#FF7200" />
            <circle cx="52" cy="22" r="1.1" fill="#EC4899" />
            <circle cx="58" cy="27" r="1" fill="#8B5CF6" />
            <circle cx="48" cy="30" r="1" fill="#10B981" />
          </g>
        )}

        {/* Creme Brulee / Cream Top Foam */}
        {isCremeBrulee && (
          <g>
            <ellipse cx="50" cy="46" rx="25" ry="7" fill="#FDF6B2" />
            <ellipse cx="50" cy="45" rx="23" ry="5.5" fill="#FEF08A" />
            {/* Torched caramelized spots */}
            <circle cx="44" cy="45" r="2.2" fill="#78350F" opacity="0.85" />
            <circle cx="53" cy="46" r="3.1" fill="#92400E" opacity="0.9" />
            <circle cx="59" cy="44" r="1.8" fill="#451A03" opacity="0.8" />
            <circle cx="37" cy="45" r="1.5" fill="#B45309" opacity="0.75" />
          </g>
        )}

        {/* Effervescent bubbles for sodas */}
        {isSoda && (
          <g fill="white" opacity="0.5">
            <circle cx="38" cy="70" r="1.5" />
            <circle cx="62" cy="85" r="1.2" />
            <circle cx="45" cy="100" r="2" />
            <circle cx="56" cy="65" r="1.8" />
            <circle cx="40" cy="115" r="1.4" />
            <circle cx="60" cy="110" r="1.6" />
          </g>
        )}

        {/* Ice cubes for chilled drinks */}
        {!isMilkshake && (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="rgba(255,255,255,0.15)">
            <rect x="36" y="58" width="14" height="12" rx="2" transform="rotate(-8 43 64)" />
            <rect x="52" y="66" width="13" height="11" rx="2" transform="rotate(12 58 71)" />
          </g>
        )}

        {/* Tapioca Pearls in bottom */}
        <g>
          {/* Pearl layer 1 */}
          <circle cx="37" cy="140" r="4.8" fill="#0F1015" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="47" cy="142" r="5" fill="#181A22" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="57" cy="141" r="5.2" fill="#0F1015" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="65" cy="139" r="4.6" fill="#181A22" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Pearl layer 2 */}
          <circle cx="41" cy="133" r="4.6" fill="#1E202B" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="51" cy="134" r="5" fill="#0F1015" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="61" cy="132" r="4.8" fill="#181A22" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Highlight sparks on boba */}
          <circle cx="36" cy="138" r="1.1" fill="white" opacity="0.6" />
          <circle cx="46" cy="140" r="1.2" fill="white" opacity="0.7" />
          <circle cx="56" cy="139" r="1.2" fill="white" opacity="0.6" />
          <circle cx="50" cy="132" r="1.1" fill="white" opacity="0.7" />
        </g>

        {/* Cup Reflection Sheen */}
        <path
          d="M 23 37 L 31 143 Q 31 149 39 149 L 45 149 L 36 37 Z"
          fill={`url(#cup-reflection-${item.id})`}
        />

        {/* BobaCult Mini Logo Brand Badge on Cup */}
        <g transform="translate(38, 86)">
          <rect x="0" y="0" width="24" height="15" rx="3" fill="#0E1015" stroke="#FF7200" strokeWidth="0.7" opacity="0.9" />
          <text x="12" y="10" fontSize="4.2" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
            {isCombo ? 'COMBO' : 'BOBACULT'}
          </text>
        </g>

        {/* Cup Rim & Dome / Flat Lid */}
        <ellipse cx="50" cy="36" rx="29" ry="6" fill="#1C1E26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
        <ellipse cx="50" cy="34" rx="27" ry="5" fill="#282B36" stroke="#FF7200" strokeWidth="0.6" />
      </svg>
    </div>
  );
};
