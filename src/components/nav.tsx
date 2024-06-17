"use client";

import Image from "next/image";
import { Button, Navbar } from "flowbite-react";

export default function NavBar({ page }: { page: string }) {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://jakbytes.com">
                <Image src="/logo.png" className="mr-3 h-6 sm:h-9" height={40} width={40} alt="jakbytes Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">jakbytes</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="/" active={page == "home"}>Home</Navbar.Link>
                <Navbar.Link href="/about" active={page == "about"}>About</Navbar.Link>
                <Navbar.Link href="/contact-us" active={page == "contact-us"}>Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}