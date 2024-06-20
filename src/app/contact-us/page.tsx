"use client"

import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";

export default function Page() {
    const [state, handleSubmit] = useForm("xkgwwwel");
    if (state.succeeded) {
        return (
            <main className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-800">
                <NavBar page={"contact-us"}/>
                <div className="flex flex-1 flex-col items-center justify-center p-10">

                    <p className="text-xl font-semibold">Thanks for reaching out, someone will get back to you soon!</p>
                    <Link href="/" passHref>
                        <button
                            className="mt-4 px-6 py-2 text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md">
                            Home
                        </button>
                    </Link>
                </div>
                <Footer/>
            </main>
        );
    }
    return (
        <main className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-800">
            <NavBar page={"contact-us"}/>
            <div className="flex flex-1 items-center justify-center p-10">
                <div
                    className="flex flex-col sm:flex-row flex-1 w-full lg:p-20 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:divide-gray-700">
                    <div className="sm:pr-10 pb-6 sm:pb-0 space-y-4 text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact us</h1>
                        <p className="text-md text-gray-600 dark:text-gray-300">
                            Need to get in touch with us? Fill out the form with your inquiry to reach out to us
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="sm:pl-10 pt-6 sm:pt-0 flex-1 space-y-6">
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-sm text-red-600 dark:text-red-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                What can we help you with?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-sm text-red-600 dark:text-red-400"
                            />
                        </div>
                        <button type="submit" disabled={state.submitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
