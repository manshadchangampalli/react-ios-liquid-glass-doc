import React from 'react';

interface CheckIconProps {
    className?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);
