import { NavItemProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const LgNavLinks = ({ navItems }: { navItems: NavItemProps[] }) => {
    return (
        <>
            {navItems?.map((item) => (
                <Link
                    key={item.label}
                    href={item.path}
                    className="hover:text-foreground text-muted-foreground font-semibold transition-colors"
                >
                    {item.label}
                </Link>
            ))}
        </>
    )
}

export default LgNavLinks