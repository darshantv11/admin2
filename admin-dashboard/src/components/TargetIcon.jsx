import React from 'react';

const TargetIcon = ({ size = 24, color = '#22c55e', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
    <line x1="12" y1="3" x2="12" y2="6" stroke={color} strokeWidth="2" />
    <line x1="12" y1="18" x2="12" y2="21" stroke={color} strokeWidth="2" />
    <line x1="3" y1="12" x2="6" y2="12" stroke={color} strokeWidth="2" />
    <line x1="18" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2" />
  </svg>
);

export default TargetIcon; 