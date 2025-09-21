import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { LiquidGlassFormData } from "../../schemas/liquidGlassSchema";
import { ControlInput } from "../ui/ControlInput";
import { CopyIcon } from "../ui/CopyIcon";
import { CheckIcon } from "../ui/CheckIcon";

interface ControlsPanelProps {
    register: UseFormRegister<LiquidGlassFormData>;
    errors: FieldErrors<LiquidGlassFormData>;
    watchedValues: Partial<LiquidGlassFormData>;
    generatedCode: string;
    onCopyCode: () => void;
    copied: boolean;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({ register, errors, watchedValues, generatedCode, onCopyCode, copied }) => {
    return (
        <div className="border border-black/30 rounded-xl max-h-[calc(100vh-100px)] p-4 space-y-4 no-scrollbar overflow-y-auto">
            <h2 className="text-lg font-semibold text-black mb-3">Controls</h2>

            <ControlInput
                label="Width"
                name="width"
                register={register}
                error={errors.width}
                value={watchedValues?.width || ""}
                placeholder="400px"
            />

            <ControlInput
                label="Height"
                name="height"
                register={register}
                error={errors.height}
                value={watchedValues?.height || ""}
                placeholder="300px"
            />

            <ControlInput
                label="Border Radius"
                name="borderRadius"
                register={register}
                error={errors.borderRadius}
                value={watchedValues?.borderRadius || ""}
                placeholder="20px"
                type="range"
                min="0"
                max="50"
            />

            <ControlInput
                label="Blur"
                name="blur"
                register={register}
                error={errors.blur}
                value={watchedValues?.blur || ""}
                placeholder="10px"
                type="range"
                min="0"
                max="30"
            />

            <ControlInput
                label="Brightness"
                name="brightness"
                register={register}
                error={errors.brightness}
                value={watchedValues?.brightness || ""}
                placeholder="1.1"
                type="range"
                min="0.5"
                max="2"
                step="0.1"
            />

            <ControlInput
                label="Padding"
                name="padding"
                register={register}
                error={errors.padding}
                value={watchedValues?.padding || ""}
                placeholder="20px"
                type="range"
                min="0"
                max="50"
            />

            <div className="space-y-2">
                <label className="block text-black font-medium text-sm">Generated Code</label>
                <div className="bg-black relative rounded-lg p-3 text-green-400 text-xs font-mono overflow-x-auto max-h-[300px]">
                    <pre className="whitespace-pre-wrap">{generatedCode}</pre>
                    <button
                        className="absolute bg-white/90 rounded-bl-md w-8 cursor-pointer h-8 p-1.5 text-black flex items-center justify-center top-0 right-0"
                        onClick={onCopyCode}>
                        {copied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                </div>
            </div>
        </div>
    );
};
