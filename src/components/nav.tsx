"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function NavBar({ page }: { page: string }) {
    return (
        <Navbar fluid rounded className=" bg-primary backdrop-blur-lg font-main">
            <Navbar.Brand as={Link} href="https://jakbytes.com">
                <Image src="/logo.png" alt="Flowbite Logo" className="rounded-full" height={50} width={50}/>
                <span className="self-center ml-3 whitespace-nowrap text-xl font-semibold text-text_primary">Jakbytes</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active={page == "home"} className="text-text_primary">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/our-apps" active={page == "our-apps"} className="text-text_primary">
                    Apps
                </Navbar.Link>
                <Navbar.Link as={Link} href="/about" active={page == "about"} className="text-text_primary">
                    About
                </Navbar.Link>
                <Navbar.Link href="/contact-us" active={page == "contact-us"} className="text-text_primary">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


/*
export default function NavBar({ page }: { page: string }) {
    console.log(page == "home" ? "page" : false)
    const selectedPageClassName = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    const unsetPageClassName = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    return (
        <div>
            <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://jakbytes.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/logo.png" alt="Flowbite Logo" height={50} width={50}/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">jakbytes</span>
                    </a>
                    <button onClick={() => { console.log("clicked") }} data-collapse-toggle="navbar-solid-bg" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                   className={page == "home" ? selectedPageClassName : unsetPageClassName}
                                   aria-current={page == "home" ? "page" : false}>Home</a>
                            </li>
                            <li>
                                <a href="/about"
                                   className={page == "about" ? selectedPageClassName : unsetPageClassName}
                                   aria-current={page == "about" ? "page" : false}>About</a>
                            </li>

                            <li>
                                <a href="/contact-us"
                                   className={page == "contact-us" ? selectedPageClassName : unsetPageClassName}
                                   aria-current={page == "contact-us" ? "page" : false}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

 */