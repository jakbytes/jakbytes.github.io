import NavBar from '@/components/nav'
import Footer from '@/components/footer'
import AppCard from '@/components/appCard'

// Yes i know the apps array is hardcoded, but this is a demo and I don't want to spend time on a database
// or API for now. We have 2 apps bro 
const apps = [
  {
    id: 1,
    image: '/puzzle_complete.png',
    title: 'VisiPuzzle',
    description: 'A fun jigsaw puzzle game playable  in VR',
    link: 'https://apps.apple.com/us/app/visipuzzle/id6504589772',
  },
  {
    id: 2,
    image: '/scroll-1.png',
    title: 'Scrolling Hero',
    description: 'A volume based infinite runner for the Apple Vision Pro',
    link: 'https://apps.apple.com/us/app/scrolling-hero/id6744659280',
  },
]

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col font-main bg-our-gradient">
        <NavBar page={'our-apps'} />
        <div className="flex flex-col flex-1 p-4 sm:p-8 lg:p-16 h-full">
          {/* Title section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Apps
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Check out our apps below
            </p>
          </div>
          
          {/* Cards section */}
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="w-full mx-auto" 
                >
                  <div className="max-w-md mx-auto md:mx-0 md:max-w-full">
                    <AppCard
                      image={app.image}
                      title={app.title}
                      description={app.description}
                      link={app.link}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }