"use client"

import Hero from "@/components/hero";
import Preloader from '../components/Preloader';
import { useEffect, useState } from 'react';
import About from "@/components/about";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="flex flex-col items-center px-4">
      
      <div>
        {loading ? <Preloader /> : null}
        <Hero />
        <About/>
      </div>

    </main>
  );
}
