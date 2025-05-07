"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarLink, NavbarCollapse, NavbarToggle} from "flowbite-react";
import Image from "next/image";

export default function NavBar({ page }: { page: string }) {
    return (
        <Navbar fluid rounded className=" bg-primary backdrop-blur-lg font-main">
            <NavbarBrand as={Link} href="/">
                <Image src="/jakbytes_logo_notext.png" alt="Flowbite Logo" className="rounded-full" height={60} width={60}/>
                <span className="self-center ml-3 whitespace-nowrap text-xl font-semibold text-text-primary">Jakbytes</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active={page == "home"} className="text-text-primary">
                    Home
                </NavbarLink>
                <NavbarLink href="/our-apps" active={page == "our-apps"} className="text-text-primary">
                    Apps
                </NavbarLink>
                <NavbarLink as={Link} href="/about" active={page == "about"} className="text-text-primary">
                    About
                </NavbarLink>
                <NavbarLink href="/contact-us" active={page == "contact-us"} className="text-text-primary">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}