import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={
                cn(
                    'bg-[#4271EB] hover:bg-[#6BBAFF] py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50',
                    className
                )
            }
            {...props}>
            {children}
        </button>
    )
}