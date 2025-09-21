"use client";

import React, { useMemo } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LiquidGlassFormData } from "../../schemas/liquidGlassSchema";

interface ControlInputProps {
    label: string;
    name: keyof LiquidGlassFormData;
    register: UseFormRegister<LiquidGlassFormData>;
    error?: FieldError;
    value?: string;
    placeholder?: string;
    type?: "text" | "range";
    min?: string;
    max?: string;
    step?: string;
}

export const ControlInput: React.FC<ControlInputProps> = ({ label, name, register, error, value = "", placeholder, type = "text", min, max, step }) => {
    const registerProps = register(name);

    const numericValue = useMemo(() => {
        const num = parseFloat(value || "0");
        return isNaN(num) ? 0 : num;
    }, [value]);

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = step ? e.target.value : `${e.target.value}px`;
        registerProps.onChange({ target: { value: newValue, name } });
    };

    return (
        <div className="space-y-1">
            <label className="block text-black font-medium text-sm">{type === "range" ? `${label}: ${value}` : label}</label>
            <div className="flex flex-col gap-4">
                {type === "range" && (
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={numericValue}
                        onChange={handleRangeChange}
                        className="w-full h-1"
                    />
                )}
                <div>
                    <input
                        type="text"
                        {...registerProps}
                        className={`w-full px-2 py-3  border outline-none rounded text-black placeholder-white/70 text-sm ${error ? "border-red-500" : "border-black/30"
                            }`}
                        placeholder={placeholder}
                    />
                    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                </div>
            </div>
        </div>
    );
};
