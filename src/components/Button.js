// src/components/Button.js
import React from 'react';
import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'default',
  fullWidth = false,
  className = '',
  ...props 
}) {
  // Define base classes and variant classes
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    white: 'btn-white'
  };
  const sizeClasses = {
    small: 'btn-sm',
    default: '',
    large: 'btn-lg'
  };
  
  // Handle full width
  const widthClasses = fullWidth ? 'w-full justify-center' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;
  
  // If href is provided, render a Link, otherwise a button
  if (href) {
    return href.startsWith('http') || href.startsWith('mailto:') ? (
      <a href={href} className={combinedClasses} target={href.startsWith('http') ? "_blank" : ""} rel={href.startsWith('http') ? "noopener noreferrer" : ""} {...props}>
        {children}
      </a>
    ) : (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}