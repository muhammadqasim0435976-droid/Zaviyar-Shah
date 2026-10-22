import React from 'react';

export const HeroLimeBrush: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 700 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="limePaintGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#819E25" stopOpacity="0.4" />
        <stop offset="45%" stopColor="#B8F500" stopOpacity="0.95" />
        <stop offset="75%" stopColor="#C8FF00" stopOpacity="1" />
        <stop offset="100%" stopColor="#D4FF33" stopOpacity="0.8" />
      </linearGradient>
      <filter id="brushNoise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="softLimeGlow">
        <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Primary aggressive diagonal sweep (lower-left to upper-right) */}
    <g filter="url(#softLimeGlow)">
      <path
        d="M -40 520 
           C 80 470, 160 380, 260 310
           C 340 250, 420 180, 520 90
           C 570 45, 630 10, 680 -20
           L 640 40
           C 570 120, 510 200, 430 280
           C 360 350, 270 430, 180 490
           C 90 550, 20 590, -70 630
           Z"
        fill="url(#limePaintGrad)"
      />

      {/* Secondary bristle streaks */}
      <path
        d="M 60 560 
           Q 210 430 390 290
           T 690 60
           L 670 100
           Q 440 290 230 460
           T 20 620
           Z"
        fill="#B8F500"
        opacity="0.85"
      />

      {/* Wild dry-brush rough edge splatters */}
      <path
        d="M 280 230 Q 380 160 560 50 L 590 70 Q 420 170 300 270 Z"
        fill="#C8FF00"
        opacity="0.75"
      />
      <path
        d="M 120 460 Q 240 370 410 250 L 430 270 Q 260 390 140 500 Z"
        fill="#819E25"
        opacity="0.6"
      />
    </g>

    {/* Spray splatters & paint droplets */}
    <circle cx="580" cy="40" r="14" fill="#C8FF00" opacity="0.85" />
    <circle cx="610" cy="25" r="7" fill="#B8F500" />
    <circle cx="540" cy="70" r="9" fill="#B8F500" />
    <circle cx="630" cy="90" r="5" fill="#C8FF00" />
    <circle cx="490" cy="130" r="6" fill="#C8FF00" opacity="0.9" />
    <circle cx="440" cy="180" r="8" fill="#B8F500" opacity="0.7" />
    <circle cx="340" cy="270" r="5" fill="#C8FF00" />
    <circle cx="210" cy="380" r="9" fill="#B8F500" opacity="0.8" />
    <circle cx="160" cy="420" r="6" fill="#B8F500" />
    <circle cx="80" cy="510" r="11" fill="#C8FF00" opacity="0.75" />
    <circle cx="30" cy="560" r="8" fill="#819E25" />
    <circle cx="-10" cy="610" r="12" fill="#B8F500" opacity="0.9" />
  </svg>
);

export const TechRadarRings: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-25 ${className}`}
  >
    {/* Concentric subtle circular target rings */}
    <circle cx="250" cy="250" r="230" stroke="#B8F500" strokeWidth="1" strokeDasharray="4 8" />
    <circle cx="250" cy="250" r="170" stroke="#B8F500" strokeWidth="1" opacity="0.6" />
    <circle cx="250" cy="250" r="110" stroke="#B8F500" strokeWidth="1" strokeDasharray="2 6" />
    <circle cx="250" cy="250" r="50" stroke="#B8F500" strokeWidth="1.5" opacity="0.8" />
    
    {/* Coordinate crosshair lines */}
    <line x1="250" y1="0" x2="250" y2="500" stroke="#B8F500" strokeWidth="0.75" strokeDasharray="3 9" />
    <line x1="0" y1="250" x2="500" y2="250" stroke="#B8F500" strokeWidth="0.75" strokeDasharray="3 9" />

    {/* Angle ticks */}
    <path d="M 250 20 L 250 35 M 250 465 L 250 480 M 20 250 L 35 250 M 465 250 L 480 250" stroke="#B8F500" strokeWidth="1.5" />
  </svg>
);

export const CornerPaintSplatter: React.FC<{ variant?: 'lime' | 'white'; className?: string }> = ({
  variant = 'lime',
  className = '',
}) => {
  const isLime = variant === 'lime';
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={`cornerGrad-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isLime ? '#819E25' : '#444'} stopOpacity="0.2" />
          <stop offset="50%" stopColor={isLime ? '#B8F500' : '#E0E0E0'} stopOpacity="0.85" />
          <stop offset="100%" stopColor={isLime ? '#C8FF00' : '#FFFFFF'} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M 50 380 
           Q 160 300 240 210
           T 380 40
           L 350 10
           Q 210 180 120 270
           T 10 370
           Z"
        fill={`url(#cornerGrad-${variant})`}
      />
      <path
        d="M 90 390 Q 210 270 340 120 L 320 140 Q 180 300 60 410 Z"
        fill={isLime ? '#B8F500' : '#B5B8AF'}
        opacity="0.6"
      />
      <circle cx="340" cy="50" r="10" fill={isLime ? '#B8F500' : '#FFF'} opacity="0.8" />
      <circle cx="360" cy="30" r="6" fill={isLime ? '#C8FF00' : '#FFF'} />
      <circle cx="280" cy="140" r="7" fill={isLime ? '#B8F500' : '#B5B8AF'} />
      <circle cx="200" cy="230" r="9" fill={isLime ? '#C8FF00' : '#FFF'} opacity="0.7" />
      <circle cx="110" cy="320" r="8" fill={isLime ? '#819E25' : '#888'} />
    </svg>
  );
};
