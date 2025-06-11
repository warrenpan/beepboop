import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
