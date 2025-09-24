

interface CuteWavingRobotProps {
  className?: string;
  size?: number;
}

const CuteWavingRobot = ({ className = "", size = 32 }: CuteWavingRobotProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Robot Body - White base */}
      <rect x="16" y="24" width="32" height="32" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Robot Head - White with rounded top */}
      <rect x="20" y="16" width="24" height="20" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Orange Accents - Ears/Headphones */}
      <rect x="18" y="18" width="4" height="6" rx="2" fill="#F97316"/>
      <rect x="42" y="18" width="4" height="6" rx="2" fill="#F97316"/>
      
      {/* Orange Shoulder Accents */}
      <rect x="18" y="26" width="3" height="4" rx="1.5" fill="#F97316"/>
      <rect x="43" y="26" width="3" height="4" rx="1.5" fill="#F97316"/>
      
      {/* Orange Waist Accent */}
      <rect x="24" y="44" width="16" height="3" rx="1.5" fill="#F97316"/>
      
      {/* Blue Glow Line on Head */}
      <rect x="22" y="20" width="20" height="2" rx="1" fill="#3B82F6" opacity="0.8"/>
      
      {/* Face Screen - Black with blue eyes */}
      <rect x="26" y="22" width="12" height="8" rx="2" fill="#111827"/>
      
      {/* Blue Glowing Eyes */}
      <circle cx="30" cy="26" r="1.5" fill="#3B82F6" opacity="0.9"/>
      <circle cx="34" cy="26" r="1.5" fill="#3B82F6" opacity="0.9"/>
      
      {/* Simple Mouth */}
      <rect x="30" y="28" width="4" height="1" rx="0.5" fill="#6B7280"/>
      
      {/* Chest Panels - Blue Glowing */}
      <rect x="26" y="32" width="4" height="3" rx="1" fill="#3B82F6" opacity="0.7"/>
      <rect x="34" y="32" width="4" height="3" rx="1" fill="#3B82F6" opacity="0.7"/>
      
      {/* Arms */}
      {/* Left Arm - Waving */}
      <rect x="16" y="28" width="3" height="8" rx="1.5" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="14" y="20" width="3" height="8" rx="1.5" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="12" y="16" width="3" height="6" rx="1.5" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Right Arm - Resting */}
      <rect x="45" y="28" width="3" height="8" rx="1.5" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="47" y="30" width="3" height="6" rx="1.5" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Hands */}
      {/* Left Hand - Waving */}
      <rect x="10" y="14" width="4" height="4" rx="2" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Right Hand - Resting */}
      <rect x="50" y="36" width="4" height="4" rx="2" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Legs */}
      <rect x="22" y="56" width="6" height="6" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="36" y="56" width="6" height="6" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      
      {/* Feet - Orange Accents */}
      <rect x="20" y="60" width="8" height="2" rx="1" fill="#F97316"/>
      <rect x="36" y="60" width="8" height="2" rx="1" fill="#F97316"/>
      
      {/* Blue Glow on Feet */}
      <rect x="22" y="60" width="2" height="1" rx="0.5" fill="#3B82F6" opacity="0.6"/>
      <rect x="38" y="60" width="2" height="1" rx="0.5" fill="#3B82F6" opacity="0.6"/>
      
      {/* Subtle Shadow */}
      <ellipse cx="32" cy="62" rx="20" ry="2" fill="#E5E7EB" opacity="0.3"/>
      
      {/* "Hi" Text */}
      <text x="32" y="58" textAnchor="middle" fill="#F97316" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">
        Hi!
      </text>
    </svg>
  );
};

export default CuteWavingRobot;
