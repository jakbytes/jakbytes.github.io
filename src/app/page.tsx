import NavBar from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NavBar page={'home'} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top half section - full column on mobile */}
        <div className="h-1/2 flex flex-col md:flex-row">
          <div className="h-2/5 md:h-auto md:w-2/5">
            <img 
              src="/avp_user.jpg" 
              alt="user" 
              className="w-full h-full object-cover rounded-r-2xl" 
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-950 dark:text-white">
              Next-Generation Spatial Computing Apps
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
              Explore the cutting-edge of spatial computing technology and
              harness the power of immersive environments.
            </p>
            <a
              href="/our-apps"
              className="mt-10 inline-block rounded-md bg-blue-950 px-4 py-2 text-sm w-1/3
               md:text-base text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Bottom half section */}
        <div className="h-1/2 bg-blue-50 dark:bg-gray-700">
          <div className="flex flex-col justify-center h-full w-full p-4 md:p-6 ">
            <h2 className="text-xl md:text-2xl font-bold text-blue-950 dark:text-white text-center">
              Immersive Gaming Experiences
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Discover our portfolio of innovative games that blend reality and virtual worlds.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm">
                <h3 className="font-semibold text-sm md:text-base text-blue-950 dark:text-white">Game Dev</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">Custom experiences for spatial computing</p>
              </div>
              <div className="bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm">
                <h3 className="font-semibold text-sm md:text-base text-blue-950 dark:text-white">Spatial Design</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">Optimized immersive environments</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href="/games"
                className="inline-block rounded bg-blue-950 px-4 py-2 text-sm md:text-base text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Our Games
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </main>
  )
}
