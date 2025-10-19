"use client";

import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-teal-400" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetTitle className="mt-25 mb-4 text-center text-4xl font-semibold">
                    <Link href="/" className="text-white/80">
                        Md Arif<span className="text-teal-400">.</span>
                    </Link>
                </SheetTitle>


                <SheetDescription className="sr-only">
                    Mobile navigation menu with links to home, services, resume, projects, and contact.
                </SheetDescription>

                <nav className="flex flex-col justify-center items-center gap-8 mt-30">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname ? "text-teal-500 border-b-2 border-teal-500" : ""} text-xl capitalize hover:text-teal-500 transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
