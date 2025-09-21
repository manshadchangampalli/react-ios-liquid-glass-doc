import React, { useRef } from 'react';
import { LiquidGlass } from 'react-ios-liquid-glass';
import { LiquidGlassConfig, Position } from '../../types';

interface PreviewPanelProps {
    config: LiquidGlassConfig;
    position: Position;
    onMouseDown: (e: React.MouseEvent) => void;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
    config,
    position,
    onMouseDown
}) => {
    const previewRef = useRef<HTMLDivElement>(null);

    return (
        <div
            style={{
                backgroundImage: "url(/bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="border relative border-black/30 rounded-xl flex flex-col"
        >
            <h2 className="text-lg absolute top-4 left-4 z-[999] font-semibold text-white mb-3">Preview</h2>
            <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                <div
                    ref={previewRef}
                    className="cursor-move select-none"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                    onMouseDown={onMouseDown}
                >
                    <LiquidGlass
                        width={config.width}
                        height={config.height}
                        borderRadius={config.borderRadius}
                        blur={config.blur}
                        brightness={config.brightness}
                        padding={config.padding}
                        style={{}}
                    >
                        <div className="text-center"></div>
                    </LiquidGlass>
                </div>
            </div>
        </div>
    );
};
