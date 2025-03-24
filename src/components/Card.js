// src/components/Card.js
import React from 'react';

export default function Card({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) {
  // Define base and hover classes
  const baseClasses = 'card';
  const hoverClasses = hover ? 'hover:shadow-lg' : '';
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

// Card subcomponents
Card.Body = function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`card-title ${className}`} {...props}>
      {children}
    </h3>
  );
};

Card.Subtitle = function CardSubtitle({ children, className = '', ...props }) {
  return (
    <p className={`card-subtitle ${className}`} {...props}>
      {children}
    </p>
  );
};

Card.Action = function CardAction({ children, className = '', ...props }) {
  return (
    <div className={`card-action ${className}`} {...props}>
      {children}
    </div>
  );
};