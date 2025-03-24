// src/components/Grid.js
import React from 'react';

export function Grid({ 
  children, 
  cols = 1,
  gap = 8,
  className = '', 
  ...props 
}) {
  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-${Math.min(cols, 2)} lg:grid-cols-${cols} gap-${gap} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function Grid2Cols({ children, className = '', ...props }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Grid3Cols({ children, className = '', ...props }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Grid4Cols({ children, className = '', ...props }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`} {...props}>
      {children}
    </div>
  );
}