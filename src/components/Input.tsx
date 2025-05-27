import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  name,
  disabled = false,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      name={name}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;