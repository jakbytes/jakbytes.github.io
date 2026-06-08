'use client'

interface AppCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  comingSoon?: boolean;
}

export default function AppCard({ image, title, description, link, comingSoon }: AppCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1.5 hover:border-white/20">
      <div className="relative overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`${title} screenshot`}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[#1c140b] to-[#0d0907]">
            <span className="px-6 text-center font-display text-xl font-semibold text-white/25">{title}</span>
          </div>
        )}
        {comingSoon && (
          <span className="absolute right-3 top-3 rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 backdrop-blur">
            Coming Soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h5 className="font-display text-2xl font-bold tracking-tight text-white">{title}</h5>
        <p className="mt-1.5 flex-1 text-white/60">{description}</p>

        {comingSoon ? (
          <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-sm font-semibold text-amber-300">
            Coming Soon
          </span>
        ) : (
          <a
            href={link}
            className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-4 py-2.5 text-stone-950 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 sm:w-auto"
          >
            <svg
              className="h-7 w-7"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="-mt-0.5 font-semibold">App Store</div>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
