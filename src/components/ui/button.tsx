import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "link" | "default";  // O cualquier otro tipo que quieras manejar
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  return (
    <button className={`${className} ${variant === "outline" ? "outline-style" : ""}`} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
