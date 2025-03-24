// src/components/Container.js
import React from 'react';

export default function Container({ 
  children, 
  size = '2xl',
  className = '', 
  ...props 
}) {
  // Define size classes
  const sizeClasses = {
    sm: 'container-sm',
    md: 'container-md',
    lg: 'container-lg',
    xl: 'container-xl',
    '2xl': 'container-2xl'
  };
  
  // Combine all classes
  const combinedClasses = `${sizeClasses[size]} ${className}`;
  
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}