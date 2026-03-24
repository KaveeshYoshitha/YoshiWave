import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import teamWork from '../assets/team-work.png';
import team from '../assets/team.png';

const images = [teamWork, team];

const Preloader = ({ onLoaded }: { onLoaded: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isCancelled) setLoadedCount((prev) => prev + 1);
      };
      img.onerror = () => {
        // Fallback to avoid hanging if an image fails
        if (!isCancelled) setLoadedCount((prev) => prev + 1);
      };
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  const isLoaded = loadedCount === images.length;

  useGSAP(() => {
    if (isLoaded) {
      // Extra delay ensures everything settles nicely
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.8,
        onComplete: onLoaded
      });
    }
  }, [isLoaded]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] bg-[#0F0F0F] flex flex-col items-center justify-center text-white"
    >
      <div className="relative flex flex-col items-center">


        <div className="text-white text-4xl font-semibold mb-8 animate-pulse drop-shadow-lg">
          <span className="text-6xl">{'{'}</span> Yoshi
          <span className="text-[#00BFA6]">Wave </span>
          <span className="text-6xl">{'}'}</span>
        </div>

        <div className="w-56 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00BFA6] to-[#FF6B6B] transition-all duration-300"
            style={{ width: `${(loadedCount / images.length) * 100}%` }}
          />
        </div>
        <p className="mt-5 text-[#00BFA6] font-semibold text-sm tracking-widest animate-pulse">
          RIDING THE WAVE...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
