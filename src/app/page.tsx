import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import TileCard from "@/components/smallCard";
import { FaBluesky, FaXTwitter, FaLinkedin  } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-primary overflow-hidden font-main">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NavBar page={'home'} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top half section - full column on mobile */}
        <div className="h-1/2 flex flex-col md:flex-row">
          <div className="h-2/5 md:h-auto md:w-2/5 p-4 md:p-6">
            <img 
              src="/avp_user.jpg" 
              alt="user" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-4 md:p-6">
            <h2 className="text-xl md:text-3xl font-bold text-text-primary ">
              Next-Generation Spatial Computing Apps
            </h2>
            <p className="mt-2 text-sm md:text-lg  text-text-secondary">
              Explore the cutting-edge of spatial computing technology and
              harness the power of immersive environments.
            </p>
            <a
              href="/our-apps"
              className="mt-10 inline-block rounded-md bg-buttons px-4 py-2 text-sm w-1/3 
               md:text-base text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Bottom half section */}
        <div className="h-1/2 bg-secondary">
          <div className="flex flex-col justify-center h-full w-full p-4 md:p-6 ">
            <h2 className="text-xl md:text-3xl font-bold text-blue-950 dark:text-white text-center">
              Immersive Gaming Experiences
            </h2>
            <p className="mt-2 text-md md:text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Discover our portfolio of innovative games that blend reality and virtual worlds.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              <TileCard title="Game dev" description="Custom experiences for spatial computing" />
              <TileCard title="Spatial Design" description="Apps designed for immersive spatial environments" />
            </div>
            <div className="mt-4 text-center">
              <a
                href="/our-apps"
                className="inline-block rounded mt-10 bg-blue-950 px-4 py-2 text-sm md:text-base text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Our Apps
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
