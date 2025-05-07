"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarLink, NavbarCollapse, NavbarToggle} from "flowbite-react";
import Image from "next/image";


const activeLinkClass = "text-buttons text-lg font-bold bg-blue-100 hover:bg-primary-100 hover:bg-opacity-50";
const inactiveLinkClass = "text-text-primary hover:bg-blue-100 text-lg";

export default function NavBar({ page }: { page: string }) {
    return (
        <Navbar fluid rounded className=" bg-primary backdrop-blur-lg font-main shadow-xl">
            <NavbarBrand as={Link} href="/">
                <Image src="/jakbytes_logo_notext.png" alt="Flowbite Logo" className="rounded-full" height={60} width={60}/>
                <span className="self-center ml-3 whitespace-nowrap text-xl font-semibold text-text-primary">Jakbytes</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active={page == "home"} className={page == "home" ? activeLinkClass : inactiveLinkClass}>
                    Home
                </NavbarLink>
                <NavbarLink href="/our-apps" active={page == "our-apps"} className={page == "our-apps" ? activeLinkClass : inactiveLinkClass}>
                    Apps
                </NavbarLink>
                <NavbarLink as={Link} href="/about" active={page == "about"} className={page == "about" ? activeLinkClass : inactiveLinkClass}>
                    About
                </NavbarLink>
                <NavbarLink href="/contact-us" active={page == "contact-us"} className={page == "contact-us" ? activeLinkClass : inactiveLinkClass}>Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}