'use client'

interface TileCardProps {
  title: string;
  description: string;
}

export default function TileCard({ title, description }: TileCardProps) {
  return (
    <div className="bg-white dark:bg-gray-600 p-3 rounded-lg shadow-sm">
    <h3 className="font-semibold text-sm md:text-base text-blue-950 dark:text-white">{title}</h3>
    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
  </div>
  );
}