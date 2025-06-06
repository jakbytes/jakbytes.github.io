import { FaBluesky, FaXTwitter, FaLinkedin  } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 font-main shadow flex items-center justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025   <a href="https://jakbytes.com/" className="hover:underline">jakbytes™</a>.
            <p className="hidden md:inline pl-2">
                 All Rights Reserved.
            </p>
                 </span>
            <ul className="flex flex-wrap items-center md:mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                {/*<li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>*/}
                    <li className="mx-1 md:mx-6 text-lg md:text-2xl">
                        <a href="https://bsky.app/profile/jakbytes.bsky.social" className=" text-center"><FaBluesky /> </a>
                    </li>
                    <li className="mx-1 md:mx-6 text-lg md:text-2xl">
                        <a href="https://x.com/jakbytes" className=" text-center"><FaXTwitter /></a>
                    </li>
                    {/* <li className="mx-1 md:mx-6 text-2xl">
                        <a href="https://linkedin.com" className="text-center"><FaLinkedin /></a>
                    </li> */}
                    <li className="mx-1 md:mx-6">
                        <a href="/contact-us" className="hover:underline">Contact</a>
                    </li>
            </ul>
        </footer>
    )
}
