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
        bg-primary text-white p-6 rounded-xl shadow-xl mb-10 w-full`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}