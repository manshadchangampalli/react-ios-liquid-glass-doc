"use client";

import React, { useCallback, useMemo } from "react";
import "react-ios-liquid-glass/dist/index.css";
import { useDraggable } from "../hooks/useDraggable";
import { useClipboard } from "../hooks/useClipboard";
import { useLiquidGlassForm } from "../hooks/useLiquidGlassForm";
import { ControlsPanel } from "../panels/ControlsPanel";
import { PreviewPanel } from "../panels/PreviewPanel";

// Main component
export default function Home() {
    const { position, handleMouseDown } = useDraggable();
    const { copied, copyToClipboard } = useClipboard();
    const { form, config, errors } = useLiquidGlassForm();

    const register = form?.register;
    const watchedValues = form?.watch ? form.watch() : {};

    const generatedCode = useMemo(
        () => `<LiquidGlass
  width="${config.width}"
  height="${config.height}"
  borderRadius="${config.borderRadius}"
  blur="${config.blur}"
  brightness="${config.brightness}"
  padding="${config.padding}"
>
  <div>Your content here</div>
</LiquidGlass>`,
        [config]
    );

    const handleCopyCode = useCallback(() => {
        copyToClipboard(generatedCode);
    }, [copyToClipboard, generatedCode]);

    return (
        <div className="md:h-screen overflow-hidden relative">
            <div className="absolute inset-0 bg-white"></div>
            <div className="relative z-10 h-full flex flex-col p-4">
                <h1 className="text-3xl font-bold text-black text-center mb-4">React iOS Liquid Glass Editor</h1>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4">
                    {form ? (
                        <ControlsPanel
                            register={register!}
                            errors={errors}
                            watchedValues={watchedValues}
                            generatedCode={generatedCode}
                            onCopyCode={handleCopyCode}
                            copied={copied}
                        />
                    ) : (
                        <div className="border border-black/30 rounded-xl max-h-[calc(100vh-100px)] p-4 space-y-4 overflow-y-auto">
                            <h2 className="text-lg font-semibold text-black mb-3">Loading...</h2>
                        </div>
                    )}
                    <PreviewPanel
                        config={config}
                        position={position}
                        onMouseDown={handleMouseDown}
                    />
                </div>
            </div>
        </div>
    );
}
