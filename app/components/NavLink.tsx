"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    onClick?: () => void;
}

const NavLink = ({
    href, children, className = '', activeClassName='font-bold underline', onClick
}: NavLinkProps) => {
    
    const pathname = usePathname();

    const isActive = pathname === href;

    const combinedClasses = `${className} ${isActive ? activeClassName : ""}`

    return (
        <Link href={href} className={combinedClasses.trim()} onClick={onClick}>
            {children}
        </Link>
    )
}

export default NavLink;