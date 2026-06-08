"use client"

import { title } from 'process';
import React, { useEffect, useState } from 'react';

interface SlideCardProps {
    title: string;
    description: string;
    style?: React.CSSProperties;  
}

export default function SlideCard({ title, description, style }: SlideCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after mount
    const timeout = setTimeout(() => setVisible(true), 100); // small delay for smoothness
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={style}
      className={`transition-all duration-700 ease-out transform
        ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        w-full rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-lg backdrop-blur-md`}
    >
      <h2 className="font-display text-xl font-bold md:text-2xl">{title}</h2>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}