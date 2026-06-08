"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarLink, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Image from "next/image";

const activeLinkClass =
    "rounded-none! bg-transparent! border-0! border-b-2! border-amber-300! px-1 py-2 text-sm font-semibold text-amber-300! transition-colors";
const inactiveLinkClass =
    "rounded-none! bg-transparent! border-0! border-b-2! border-transparent! px-1 py-2 text-sm font-medium text-white/60! hover:text-white! transition-colors";

export default function NavBar({ page }: { page: string }) {
    return (
        <Navbar
            fluid
            rounded
            className="sticky top-0 z-50 border-b border-white/10 bg-[#110c08]! font-main px-4! sm:px-6!"
        >
            <NavbarBrand as={Link} href="/">
                <Image
                    src="/jakbytes_logo_notext.png"
                    alt="jakbytes logo"
                    className="rounded-full ring-1 ring-white/20"
                    height={52}
                    width={52}
                />
                <span className="self-center ml-3 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-white">
                    Jakbytes
                </span>
            </NavbarBrand>
            <NavbarToggle className="text-white hover:bg-white/10 focus:ring-2 focus:ring-white/20" />
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
                <NavbarLink href="/contact-us" active={page == "contact-us"} className={page == "contact-us" ? activeLinkClass : inactiveLinkClass}>
                    Contact
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
