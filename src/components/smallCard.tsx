'use client'

interface TileCardProps {
  title: string;
  description: string;
}

export default function TileCard({ title, description }: TileCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-buttons/40 hover:bg-white/[0.07]">
      <h3 className="font-display text-base font-semibold text-white md:text-lg">{title}</h3>
      <p className="mt-1.5 text-sm text-white/60 md:text-[0.95rem]">{description}</p>
    </div>
  );
}
