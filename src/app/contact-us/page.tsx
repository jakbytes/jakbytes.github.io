"use client"

import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";

const inputClass =
    "mt-1 block w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/30 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

export default function Page() {
    const [state, handleSubmit] = useForm("xkgwwwel");
    if (state.succeeded) {
        return (
            <main className="flex min-h-screen flex-col bg-[#0b0806] font-main text-white">
                <NavBar page={"contact-us"}/>
                <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
                    <p className="text-xl font-semibold">Thanks for reaching out, someone will get back to you soon!</p>
                    <Link href="/" passHref>
                        <button
                            className="mt-5 rounded-md bg-buttons px-6 py-2 font-semibold text-stone-950 transition hover:bg-buttons-hover focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                            Home
                        </button>
                    </Link>
                </div>
                <Footer/>
            </main>
        );
    }
    return (
        <main className="flex min-h-screen flex-col bg-[#0b0806] font-main text-white">
            <NavBar page={"contact-us"}/>
            <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
                <div
                    className="flex w-full max-w-4xl flex-col divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:flex-row sm:divide-x sm:divide-y-0 lg:p-12">
                    <div className="space-y-4 pb-6 text-center sm:w-1/3 sm:shrink-0 sm:self-center sm:pb-0 sm:pr-10 sm:text-left">
                        <h1 className="font-display text-3xl font-bold text-white">Contact us</h1>
                        <p className="text-white/60">
                            Need to get in touch with us? Fill out the form with your inquiry to reach out to us
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex-1 space-y-6 pt-6 sm:pl-10 sm:pt-0">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80">
                                Name
                            </label>
                            <input id="name" type="text" name="name" className={inputClass}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80">
                                Email
                            </label>
                            <input id="email" type="email" name="email" className={inputClass}/>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-sm text-red-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/80">
                                What can we help you with?
                            </label>
                            <textarea id="message" name="message" className={inputClass}/>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-sm text-red-400"
                            />
                        </div>
                        <button type="submit" disabled={state.submitting}
                                className="flex w-full justify-center rounded-md border border-transparent bg-buttons px-4 py-2 text-sm font-semibold text-stone-950 shadow-sm transition hover:bg-buttons-hover focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0b0806] disabled:opacity-60">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
