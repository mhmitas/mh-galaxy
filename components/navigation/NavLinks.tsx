'use client'

import { NavItemProps } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

export const LgNavLinks = ({ navItems }: { navItems: NavItemProps[] }) => {
    return (
        <>
            {navItems?.map((item) => (
                <Link
                    key={item.label}
                    href={item.path}
                    className="hover:text-primary text-foreground font-semibold transition-colors"
                >
                    {item.label}
                </Link>
            ))}
        </>
    )
}

export const SmNavLinks = ({ navItems }: { navItems: NavItemProps[] }) => {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost' className='overflow-hidden'>
                    <Menu size={25} />
                </Button>
            </SheetTrigger>
            <SheetContent side='top' className='p-0 [&>button]:hidden'>
                <SheetHeader className='p-4 pb-0'>
                    <SheetTitle className='text-start font-bold text-xl flex justify-between items-center'>
                        <Link href="/" className="">
                            <div className="flex overflow-hidden items-center gap-2">
                                <Image className="w-9" src="/logo.png" alt="Loading" width={50} height={50} />
                                <span className="text-xl md:text-2xl font-bold line-clamp-1">Loading..</span>
                            </div>
                        </Link>
                        <Button onClick={() => setOpen(false)} variant='ghost' size="icon" className='size-8'><X size={20} /></Button>
                    </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-2 overflow-y-auto max-h-[60vh] my-4'>
                    {navItems?.map((item) => (
                        <Link
                            key={item.label}
                            href={item.path}
                            className="w-full hover:bg-primary/10 px-5 py-2 rounded font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>

    )
}