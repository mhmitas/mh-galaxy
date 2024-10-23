import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import LgNavLinks from "./NavLinks"
import { NavItemProps } from "@/types"

export default async function Navbar() {

    const navItems: NavItemProps[] = [
        { label: "Home", path: "/" },
        { label: "Features", path: "/features" },
        { label: "Contact", path: "/contact", },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm">
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="">
                            <div className="w-max flex items-center gap-2">
                                <Image className="w-9" src="/logo.png" alt="Loading" width={50} height={50} />
                                <span className="text-xl md:text-2xl font-bold">Loading..</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <LgNavLinks navItems={navItems} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* sign in user's section */}
                        <Button className="rounded-full px-4" size="sm">Sign In</Button>
                        {/* small device menu */}
                        <div className="md:hidden flex items-center gap-1">
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}