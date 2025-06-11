"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
    const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
    };
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;
    return ((0, jsx_runtime_1.jsx)("button", { className: buttonClasses, onClick: onClick, disabled: disabled, children: children }));
};
exports.Button = Button;
