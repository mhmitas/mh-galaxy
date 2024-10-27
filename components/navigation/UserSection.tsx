import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from "../ui/button"
import { LayoutDashboard, LogOut, User } from "lucide-react"

const UserSection = ({ session }: { session: any }) => {
    return (
        <>
            {
                session
                    ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="rounded-full">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-44 sm:min-w-64">
                                <DropdownMenuItem className="space-x-2">
                                    <User />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="space-x-2">
                                    <LayoutDashboard />
                                    <span>Dashboard</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="space-x-2">
                                    <LogOut />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                    )
                    : (
                        <Button className="rounded-full px-4" size="sm">Sign In</Button>
                    )
            }
        </>
    )
}

export default UserSection;