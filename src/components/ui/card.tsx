import React from "react";

// Definimos la interfaz para aceptar children
interface CardProps {
  className?: string;
  children: React.ReactNode;  // children puede ser cualquier tipo de contenido, como texto o componentes.
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ className, children }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ className, children }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardProps> = ({ className, children }) => (
  <h2 className={`card-title ${className}`}>
    {children}
  </h2>
);

export { Card, CardContent, CardHeader, CardTitle };
