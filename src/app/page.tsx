import NavBar from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-800">
            <NavBar page={"home"} />
            <div className="flex flex-1 flex-col items-center justify-center p-12 lg:p-24">
                <h1 className="text-3xl font-bold text-blue-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    Next-Generation Spatial Computing Apps and Games
                </h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 sm:text-xl md:mt-6">
                    Explore the cutting-edge of spatial computing technology and harness the power of immersive
                    environments.
                </p>
                <a href="/contact-us"
                   className="mt-8 inline-block rounded bg-blue-950 px-6 py-3 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:text-lg">
                    Learn More
                </a>
            </div>
            <Footer/>
        </main>
    );
}
