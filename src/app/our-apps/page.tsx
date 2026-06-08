import NavBar from '@/components/nav'
import Footer from '@/components/footer'
import AppCard from '@/components/appCard'

const apps = [
  {
    id: 1,
    image: '/puzzle_complete.png',
    title: 'VisiPuzzle',
    description: 'A fun jigsaw puzzle game playable in VR',
    link: 'https://apps.apple.com/us/app/visipuzzle/id6504589772',
  },
  {
    id: 2,
    image: '/scroll-1.png',
    title: 'Scrolling Hero',
    description: 'A volume based infinite runner for the Apple Vision Pro',
    link: 'https://apps.apple.com/us/app/scrolling-hero/id6744659280',
  },
  {
    id: 3,
    image: '',
    title: "Flick'em Football",
    description: 'A pick-up-and-play football flicking game.',
    comingSoon: true,
  },
]

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0b0806] font-main text-white">
      <NavBar page={'our-apps'} />
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-12">
        {/* Title section */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">Our Apps</h1>
          <p className="mt-2 text-white/60">Check out our apps below</p>
        </div>

        {/* Cards section */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {apps.map((app) => (
              <AppCard
                key={app.id}
                image={app.image}
                title={app.title}
                description={app.description}
                link={app.link}
                comingSoon={app.comingSoon}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
