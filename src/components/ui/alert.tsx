import React from "react";

// Definimos los tipos de propiedades que aceptan los componentes
interface AlertProps {
  className?: string;
  variant?: "destructive" | "info" | "success"; // Puedes agregar más variantes si lo deseas
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ className, variant = "info", children }) => {
  const variantClasses = {
    destructive: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
  };

  return (
    <div className={`${variantClasses[variant]} ${className} p-4 rounded-md`}>
      {children}
    </div>
  );
};

interface AlertTitleProps {
  className?: string;
  children: React.ReactNode;
}

const AlertTitle: React.FC<AlertTitleProps> = ({ className, children }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);

interface AlertDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const AlertDescription: React.FC<AlertDescriptionProps> = ({ className, children }) => (
  <p className={`text-sm ${className}`}>{children}</p>
);

export { Alert, AlertTitle, AlertDescription };
