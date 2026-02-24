import React from 'react';

interface TriforceIconProps {
  className?: string;
}

export const TriforceIcon: React.FC<TriforceIconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon points="50,10 35,35 65,35" />
    <polygon points="25,60 10,85 40,85" />
    <polygon points="75,60 60,85 90,85" />
  </svg>
);
