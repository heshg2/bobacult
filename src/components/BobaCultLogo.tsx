import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BobaCultLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Panda Emblem SVG */}
      <div className={`relative ${sizeMap[size]} shrink-0 rounded-2xl overflow-hidden shadow-md shadow-orange-950/40 bg-gradient-to-br from-[#FF7A00] to-[#E65100] p-1 flex items-center justify-center border border-orange-400/30`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Sunburst hatch pattern */}
          <g stroke="#CC4E00" strokeWidth="2.5" opacity="0.65">
            <line x1="100" y1="30" x2="100" y2="10" />
            <line x1="125" y1="34" x2="135" y2="16" />
            <line x1="148" y1="45" x2="163" y2="30" />
            <line x1="166" y1="63" x2="185" y2="52" />
            <line x1="175" y1="86" x2="195" y2="80" />
            <line x1="75" y1="34" x2="65" y2="16" />
            <line x1="52" y1="45" x2="37" y2="30" />
            <line x1="34" y1="63" x2="15" y2="52" />
            <line x1="25" y1="86" x2="5" y2="80" />
          </g>

          {/* Geometric Panda Ears */}
          <polygon points="50,45 68,32 60,65" fill="#111217" stroke="#1E2028" strokeWidth="1.5" />
          <polygon points="150,45 132,32 140,65" fill="#111217" stroke="#1E2028" strokeWidth="1.5" />
          <polygon points="52,47 62,38 58,58" fill="#2A2D37" />
          <polygon points="148,47 138,38 142,58" fill="#2A2D37" />

          {/* Panda Head Base */}
          <polygon points="65,65 100,50 135,65 145,95 138,125 100,135 62,125 55,95" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="1" />
          
          {/* Geometric Facets: Forehead & Cheeks */}
          <polygon points="100,50 82,70 100,82 118,70" fill="#FFFFFF" />
          <polygon points="65,65 82,70 100,50" fill="#EDEDED" />
          <polygon points="135,65 118,70 100,50" fill="#F4F4F4" />
          <polygon points="65,65 55,95 72,90 82,70" fill="#E2E5E9" />
          <polygon points="135,65 145,95 128,90 118,70" fill="#E8EBEE" />

          {/* Eye Patches (Geometric Origami) */}
          <polygon points="72,78 88,76 86,98 70,96" fill="#15171E" />
          <polygon points="128,78 112,76 114,98 130,96" fill="#15171E" />
          
          {/* Eyes Spark / Pupil */}
          <circle cx="80" cy="87" r="2.5" fill="#FFFFFF" />
          <circle cx="120" cy="87" r="2.5" fill="#FFFFFF" />

          {/* Muzzle & Nose */}
          <polygon points="100,82 90,105 110,105" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="0.8" />
          <polygon points="95,95 105,95 100,103" fill="#1A1C23" />
          <line x1="100" y1="103" x2="100" y2="114" stroke="#1A1C23" strokeWidth="2" />
          <path d="M92 112 Q100 118 108 112" stroke="#1A1C23" strokeWidth="2" fill="none" />

          {/* Body / Shoulders */}
          <polygon points="62,125 100,135 70,165 40,150" fill="#111217" />
          <polygon points="138,125 100,135 130,165 160,150" fill="#191B22" />
          <polygon points="70,165 100,135 130,165 100,175" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />

          {/* Boba Cup clutched in hand (Panda clutching cup) */}
          <g transform="translate(42, 85)">
            {/* Cup Body */}
            <path
              d="M10 20 L16 80 Q16 88 26 88 L34 88 Q44 88 44 80 L50 20 Z"
              fill="#FFFFFF"
              stroke="#111217"
              strokeWidth="2.5"
            />
            {/* Straw */}
            <line x1="28" y1="-8" x2="32" y2="22" stroke="#111217" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="29" y1="-7" x2="31" y2="20" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Cup Lid & Rim */}
            <ellipse cx="30" cy="20" rx="21" ry="5.5" fill="#FFFFFF" stroke="#111217" strokeWidth="2.5" />
            <path d="M12 20 Q30 14 48 20" stroke="#111217" strokeWidth="2.5" fill="none" />

            {/* Cup Label BobaCult */}
            <rect x="18" y="38" width="24" height="15" rx="3" fill="#111217" />
            <text x="30" y="48" fontSize="4.8" fontWeight="bold" fill="#FF7A00" textAnchor="middle" fontFamily="sans-serif">
              BobaCult
            </text>

            {/* Tapioca Pearls in Cup */}
            <circle cx="22" cy="74" r="3.8" fill="#111217" />
            <circle cx="29" cy="77" r="4.2" fill="#1A1C23" />
            <circle cx="37" cy="74" r="3.9" fill="#111217" />
            <circle cx="25" cy="67" r="3.6" fill="#242731" />
            <circle cx="33" cy="66" r="3.8" fill="#111217" />
            <circle cx="28" cy="60" r="3.2" fill="#1A1C23" />

            {/* Panda Claw holding Cup */}
            <path d="M4 42 Q8 40 12 46 Q10 54 4 52 Z" fill="#111217" stroke="#333" strokeWidth="1" />
            <circle cx="11" cy="45" r="2.2" fill="#FAFAFA" />
            <circle cx="11" cy="51" r="2.2" fill="#FAFAFA" />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-syne font-extrabold tracking-tight text-white uppercase text-base sm:text-lg leading-none">
              BobaCult
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">
              Premium
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">
            Bubble Tea · Koswatte
          </span>
        </div>
      )}
    </div>
  );
};
