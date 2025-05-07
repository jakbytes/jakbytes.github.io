'use client'

import { Card } from 'flowbite-react'
import Image from 'next/image'

interface AppCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function AppCard({ image, title, description, link }: AppCardProps) {
  return (
    <Card
      className="w-full h-full rounded-xl"
      renderImage={() => (
        <div className="overflow-hidden">
          <Image 
            width={500} 
            height={500} 
            src={image} 
            alt={`${title} image`}
            className="w-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-xl" 
          />
        </div>
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-4 text-md">
        {description}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <a
          href={link}
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="mr-3 h-7 w-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
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
            <div className="mb-1 text-sm">Download on the</div>
            <div className="-mt-1 font-sans text-md font-semibold">
              App Store
            </div>
          </div>
        </a>
      </div>
    </Card>
  )
}