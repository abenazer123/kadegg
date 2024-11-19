import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "flex items-center justify-center rounded-full font-medium transition-all duration-200";
  const variants = {
    primary: "bg-[#FFF68F] text-black hover:bg-[#FFFFE0]",
    secondary: "bg-transparent border-2 border-[#FFF68F] text-[#FFF68F] hover:bg-[#FFF68F] hover:text-black"
  };
  const sizes = {
    default: "px-6 py-3",
    lg: "px-8 py-4 text-xl"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};