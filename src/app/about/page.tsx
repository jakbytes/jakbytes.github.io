import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import SlideCard from "@/components/slideCard";

const aboutUsCards = [
    {
        id: 1,
        title: "Our Goals",
        description: "We plan to work on apps that utilize the newest technologies." +
        "We aim to create innovative and immersive experiences that take advantage of the opportunities that spatial computing allows for and to transform the way we interact with our apps.",
    },
    {
        id: 2,
        title: "Our Devs",
        description: "We are a team of passionate developers and designers focused on creating immersive experiences." +
        "We met in high school at Calvert Hall College and have been working to create amazing apps over the last few years. Are you actually reading this? lmao",    
    },
    {
      id: 3,
      title: "Our Apps",
      description: "We are currently working on a few apps for the Apple Vision Pro, including VisiPuzzle and Scrolling Hero." + 
      "We are also working on a few other apps that will be released in the future. Stay tuned for more updates! We are working" + 
      " to leverage the technology to build successful apps that will have growth potential as less costly devices are released.",
  },
];

const renderSlideCards = () => {
    return aboutUsCards.map((card, idx) => (
        <SlideCard key={card.id} title={card.title} description={card.description} style={{ transitionDelay: `${idx * 150}ms` }} />
    ));
};



export default function Page() {
    return (
    <main className="flex min-h-screen flex-col bg-[#0b0806] font-main text-white">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NavBar page={'about'} />

      <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {/* Hero banner */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <div className="absolute inset-0 bg-[url('/chc3.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0806] via-[#0b0806]/70 to-transparent" />
          <div className="relative flex min-h-[220px] flex-col justify-end p-6 md:min-h-[280px] md:p-8">
            <h1 className="font-display text-4xl font-bold text-white md:text-6xl">
              About Us
            </h1>
            <p className="mt-2 text-lg text-white/70">
              Learn more about us and our goals
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 space-y-5">
          {renderSlideCards()}
        </div>
      </div>

      <Footer />
    </main>
  )
}