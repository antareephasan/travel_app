import { NAV_LINKS } from "@/constants"
import Link from "next/link"

const DropdownMenu = () => {
    return (
        <div className="absolute lg:hidden border border-gray rounded-xl
                padding-container bg-white right-6 py-2
                top-[60px]">
            <ul className="gap-2 flex flex-col">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.key}
                        href={link.href}
                        className="regular-16 text-gray-50 flex-center
                            cursor-pointer py-2 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default DropdownMenu