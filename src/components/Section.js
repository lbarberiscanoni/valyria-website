// src/components/Section.js
import React from 'react';

export default function Section({ 
  children, 
  variant = 'white',
  className = '', 
  ...props 
}) {
  // Define variant classes
  const variantClasses = {
    white: 'section-white',
    gray: 'section-gray',
    hero: 'section-hero',
    cta: 'section-cta'
  };
  
  // Combine all classes
  const combinedClasses = `${variantClasses[variant]} ${className}`;
  
  return (
    <section className={combinedClasses} {...props}>
      {children}
    </section>
  );
}