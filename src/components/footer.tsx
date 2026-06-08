import { FaBluesky, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="mt-auto w-full border-t border-white/10 bg-[#110c08] font-main">
            <div className="flex w-full flex-col items-center gap-3 px-4 py-5 sm:flex-row sm:justify-between sm:px-6">
                <span className="text-sm text-white/55">
                    © 2025{" "}
                    <a href="https://jakbytes.com/" className="text-white/80 transition-colors hover:text-white hover:underline">
                        jakbytes™
                    </a>
                    <span className="hidden md:inline"> · All Rights Reserved.</span>
                </span>
                <ul className="flex flex-wrap items-center gap-5 text-sm font-medium text-white/55">
                    <li className="text-xl transition-colors hover:text-white">
                        <a href="https://bsky.app/profile/jakbytes.bsky.social" aria-label="Bluesky">
                            <FaBluesky />
                        </a>
                    </li>
                    <li className="text-xl transition-colors hover:text-white">
                        <a href="https://x.com/jakbytes" aria-label="X (Twitter)">
                            <FaXTwitter />
                        </a>
                    </li>
                    <li className="transition-colors hover:text-white">
                        <a href="/contact-us" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
