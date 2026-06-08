import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import TileCard from "@/components/smallCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0b0806] font-main text-white">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <NavBar page={"home"} />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col">
            <h1
              className="reveal font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Apps built for the{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                next dimension
              </span>
            </h1>

            <p
              className="reveal mt-5 max-w-md text-base text-white/65 md:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              We explore the cutting edge of spatial computing, crafting immersive
              environments and games that blend the real and virtual worlds.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.3s" }}>
              <a
                href="/our-apps"
                className="group inline-flex items-center gap-2 rounded-full bg-buttons px-7 py-3 font-semibold text-stone-950 shadow-[0_0_30px_-6px_rgba(245,158,11,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-buttons-hover hover:shadow-[0_0_42px_-2px_rgba(251,191,36,0.95)] focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                Explore our apps
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Learn more
              </a>
            </div>

          </div>

          {/* Hero image in a glass frame */}
          <div className="reveal" style={{ animationDelay: "0.25s" }}>
            <img
              src="/avp_user.jpg"
              alt="A person using an Apple Vision Pro headset"
              className="aspect-[4/3] w-full rounded-[2rem] border border-white/15 object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </section>

        {/* Immersive gaming */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md md:p-12">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
                Immersive Experiences
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/60 md:text-lg">
                Discover our portfolio of innovative games that blend reality and virtual worlds.
              </p>
            </div>

            <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              <TileCard title="Game Development" description="Custom experiences built for spatial computing" />
              <TileCard title="Spatial Design" description="Apps designed for immersive spatial environments" />
            </div>

            <div className="mt-10 text-center">
              <a
                href="/our-apps"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                View our apps
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
