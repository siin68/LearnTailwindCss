import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={` bg-red-300 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;