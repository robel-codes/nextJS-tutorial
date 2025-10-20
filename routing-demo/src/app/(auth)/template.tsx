"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({
    children,
}: {    
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [input, setinput] = useState("");
    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setinput(e.target.value)}/>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link 
                     key={link.name} href={link.href}
                     className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                     >
                        {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    );
}
