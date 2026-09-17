import React, { useState } from 'react';

// Official K2 BlackX Logo image provided by user
export const K2_LOGO_IMAGE_SRC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBOYE5gMBIgACEQEDEQH/2wBD...";

interface K2LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'badge' | 'full';
  showSubtitle?: boolean;
}

export const K2Logo: React.FC<K2LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'icon',
  showSubtitle = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  // SVG representation of the official K2 BlackX Emblem (used as high-fidelity fallback if image base64 is truncated)
  const EmblemSVG = ({ width = '100%', height = '100%' }: { width?: string; height?: string }) => (
    <svg
      viewBox="0 0 400 400"
      width={width}
      height={height}
      className="w-full h-full drop-shadow-2xl select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Background matte radial shadow */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e222d" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#0a0c10" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#020408" stopOpacity="1" />
        </radialGradient>

        {/* Titanium Gunmetal 3D Gradients */}
        <linearGradient id="titaniumDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555a64" />
          <stop offset="35%" stopColor="#2c3038" />
          <stop offset="70%" stopColor="#15171c" />
          <stop offset="100%" stopColor="#323640" />
        </linearGradient>

        <linearGradient id="titaniumBevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a92a0" />
          <stop offset="30%" stopColor="#414754" />
          <stop offset="70%" stopColor="#1e2129" />
          <stop offset="100%" stopColor="#525968" />
        </linearGradient>

        {/* Luxury Gold Gradients for the iconic 'X' slash */}
        <linearGradient id="goldLuxury" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a5416" />
          <stop offset="25%" stopColor="#b88628" />
          <stop offset="50%" stopColor="#f5d580" />
          <stop offset="75%" stopColor="#d4a339" />
          <stop offset="100%" stopColor="#8a611c" />
        </linearGradient>

        <linearGradient id="goldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff2c2" />
          <stop offset="40%" stopColor="#e5b967" />
          <stop offset="80%" stopColor="#996f1d" />
          <stop offset="100%" stopColor="#f7dc92" />
        </linearGradient>

        {/* Shadow filters for realistic 3D bevel */}
        <filter id="metalShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.85" />
        </filter>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#d4af37" floodOpacity="0.4" />
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.9" />
        </filter>
      </defs>

      {/* Dark texture disc background */}
      <circle cx="200" cy="200" r="190" fill="url(#bgGlow)" stroke="#1a1e27" strokeWidth="2" />

      {/* Outer Metallic Ring Frame with Tech Notches */}
      <circle
        cx="200"
        cy="185"
        r="115"
        stroke="url(#titaniumBevel)"
        strokeWidth="6"
        strokeDasharray="420 18 120 18"
        strokeDashoffset="35"
        filter="url(#metalShadow)"
      />
      <circle
        cx="200"
        cy="185"
        r="124"
        stroke="#1a1f29"
        strokeWidth="1.5"
        strokeDasharray="8 6"
      />

      {/* Subtle Circular Gold Accent Ring Arc */}
      <path
        d="M 275 110 A 115 115 0 0 1 315 185"
        stroke="url(#goldLuxury)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#goldGlow)"
      />
      <path
        d="M 125 260 A 115 115 0 0 1 85 185"
        stroke="url(#goldLuxury)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* --- The 'K' (Gunmetal Titanium 3D) --- */}
      <g filter="url(#metalShadow)">
        {/* K Vertical Spine */}
        <path
          d="M 95 118 L 132 118 L 132 252 L 95 252 Z"
          fill="url(#titaniumBevel)"
          stroke="#474e5c"
          strokeWidth="1.5"
        />
        {/* K Top Diagonal Arm */}
        <path
          d="M 130 180 L 196 118 L 235 118 L 158 190 Z"
          fill="url(#titaniumDark)"
          stroke="#555c6c"
          strokeWidth="1.5"
        />
        {/* K Bottom Diagonal Leg */}
        <path
          d="M 148 184 L 218 252 L 180 252 L 126 198 Z"
          fill="url(#titaniumBevel)"
          stroke="#3d4350"
          strokeWidth="1.5"
        />
      </g>

      {/* --- The '2' (Interwoven 3D Titanium) --- */}
      <g filter="url(#metalShadow)">
        <path
          d="M 160 142 C 160 120 180 114 212 114 C 244 114 266 126 266 148 C 266 172 238 194 195 222 L 268 222 L 268 252 L 158 252 L 158 230 C 198 200 236 172 236 150 C 236 138 226 132 210 132 C 190 132 176 140 170 152 Z"
          fill="url(#titaniumBevel)"
          stroke="#5a6272"
          strokeWidth="1.5"
        />
      </g>

      {/* --- The 'X' (First stroke: Gunmetal Slash) --- */}
      <g filter="url(#metalShadow)">
        <polygon
          points="215,110 248,110 338,258 305,258"
          fill="url(#titaniumDark)"
          stroke="#414856"
          strokeWidth="1.5"
        />
      </g>

      {/* --- The 'X' (Second stroke: Radiant Iconic GOLD SLASH extending outside the ring) --- */}
      <g filter="url(#goldGlow)">
        {/* Sleek, sharp, tapered aerodynamic gold blade */}
        <polygon
          points="335,90 292,85 160,275 204,280"
          fill="url(#goldLuxury)"
          stroke="url(#goldBevel)"
          strokeWidth="2"
        />
        {/* Gold inner highlight line */}
        <line
          x1="325"
          y1="93"
          x2="175"
          y2="272"
          stroke="#fff7dc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* --- Security Shield with Keyhole at base of circle --- */}
      <g transform="translate(200, 310) scale(0.65)" filter="url(#goldGlow)">
        {/* Shield outline */}
        <path
          d="M 0 -35 L 28 -20 L 28 8 C 28 28 0 42 0 42 C 0 42 -28 28 -28 8 L -28 -20 Z"
          fill="#0c0e14"
          stroke="url(#goldLuxury)"
          strokeWidth="2.5"
        />
        {/* Keyhole */}
        <circle cx="0" cy="-2" r="6" fill="url(#goldBevel)" />
        <polygon points="-4,-2 4,-2 6,14 -6,14" fill="url(#goldBevel)" />
        {/* Tech horizontal wings */}
        <line x1="-55" y1="2" x2="-35" y2="2" stroke="url(#goldLuxury)" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="2" x2="55" y2="2" stroke="url(#goldLuxury)" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Subtle Tech Crosshairs */}
      <line x1="20" y1="200" x2="45" y2="200" stroke="#333a48" strokeWidth="1.5" />
      <line x1="355" y1="200" x2="380" y2="200" stroke="#333a48" strokeWidth="1.5" />
      <line x1="200" y1="20" x2="200" y2="45" stroke="#333a48" strokeWidth="1.5" />
      <line x1="200" y1="365" x2="200" y2="385" stroke="#333a48" strokeWidth="1.5" />
    </svg>
  );

  // Logo content renderer: attempts to render the provided base64 <img> first
  const renderEmblem = () => {
    if (!imageError) {
      return (
        <img
          src={K2_LOGO_IMAGE_SRC}
          alt="K2 BlackX - Cyber Security, Digital Intelligence, Protection"
          className="w-full h-full object-contain select-none"
          onError={() => setImageError(true)}
        />
      );
    }
    return <EmblemSVG />;
  };

  // Full Logo with 3D Typography
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-2 flex items-center justify-center">
          {renderEmblem()}
        </div>

        {/* K2 BlackX 3D Typography */}
        <div className="mt-1 flex items-center justify-center gap-1 font-mono">
          <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 tracking-wider drop-shadow-md">
            K2 Black
          </span>
          <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_2px_8px_rgba(217,119,6,0.4)]">
            X
          </span>
        </div>

        {/* Subtitle / Tagline */}
        {showSubtitle && (
          <div className="mt-1 flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>CYBER SECURITY</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>DIGITAL INTELLIGENCE</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>PROTECTION</span>
          </div>
        )}
      </div>
    );
  }

  // Compact Icon variant (for Navbar, Hero, Footer, etc. - pure image)
  return (
    <div
      className={`relative ${sizeClasses[size]} shrink-0 rounded-xl overflow-hidden p-0.5 bg-slate-950 border border-slate-800 shadow-lg shadow-black/60 select-none ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {renderEmblem()}
      </div>
    </div>
  );
};
