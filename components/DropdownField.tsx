// src/components/ui/DropdownField.tsx
import React from "react";
import { Label } from "@/components/ui/label";

interface DropdownFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
  name?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  error,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <Label>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded-md p-2 text-sm bg-background outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-150 ${
          error ? "border-destructive" : "border-input"
        }`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default DropdownField;
