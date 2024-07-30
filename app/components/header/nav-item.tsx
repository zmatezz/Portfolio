import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    const pathName = usePathname();

    const isActive = pathName === href
     
    return (
        <Link href={href} className={cn('text-gray-400 flex items-center gap-2 font-medium font-poppins', isActive && 'text-gray-50')}>
            <span className="text-[#6BBAFF]">#</span>
            {label}
        </Link>
    )
}