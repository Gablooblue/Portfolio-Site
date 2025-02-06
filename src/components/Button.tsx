import React, { ReactNode } from "react"

interface ButtonProps {
    link: string,
    content: string,
    icon?: ReactNode,
    target?: string,
    className?: string
}

function Button({ link, content, icon, target = "_blank", className = "" }: ButtonProps) {
    const defaultClasses = "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
    
    return (
        <a 
            href={link} 
            target={target} 
            className={`${defaultClasses} ${className}`}
        >
            {icon && <span className="w-5 h-5 mr-3">{icon}</span>}
            {content}
        </a>
    )
}

export default Button
