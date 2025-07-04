"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

const NavLink = ({
    href, children, className = '', activeClassName='font-bold underline',
}: NavLinkProps) => {
    
    const pathname = usePathname();

    const isActive = pathname === href;

    const combinedClasses = `${className} ${isActive ? activeClassName : ""}`

    return (
        <Link href={href} className={combinedClasses.trim()}>
            {children}
        </Link>
    )
}

export default NavLink;