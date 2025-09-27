import React from "react";
import { getBadgeColor } from "./colorMapper";
import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({ 
  label, 
  mode = "light", 
  className = "",
  onClick 
}) => {
  const { background, border, text } = getBadgeColor(label, mode);
  
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 12px",
    border: `1px solid ${border}`,
    backgroundColor: background,
    color: text,
    borderRadius: "6px",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.25",
    userSelect: "none",
    transition: "all 0.2s ease-in-out",
    cursor: onClick ? "pointer" : "default",
  };

  const hoverStyles: React.CSSProperties = onClick ? {
    transform: "translateY(-1px)",
    boxShadow: `0 2px 8px ${background}40`,
  } : {};

  const [isHovered, setIsHovered] = React.useState(false);

  const finalStyles = {
    ...baseStyles,
    ...(isHovered ? hoverStyles : {}),
  };

  return (
    <span
      className={`badge ${className}`.trim()}
      style={finalStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {label}
    </span>
  );
};

export default Badge;