import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamImg from '../assets/team.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on the image when scrolling
    gsap.to(imgRef.current, {
      y: 150, // Image moves down slower relative to scroll
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Entrance animation for text when page loads
    gsap.from(textRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: container });

  return (
    <>
      <div
        id="home"
        ref={container}
        className="hero bg-transparent min-h-screen"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse overflow-hidden">
          <img
            ref={imgRef}
            src={teamImg}
            width=" 100%"
            height="100%"
            alt="Team"
            className="max-w-sm rouned-lg shadow-2xl border-0"
          />
          <div ref={textRef}>
            <h1 className="text-5xl font-bold text-[#00BFA6] ">
              Ride the Digital Wave with YoshiWave
            </h1>
            <p className="py-6 text-lg">
              YoshiWave blends innovation and design to create immersive digital
              experiences. Whether you're launching a startup or scaling your
              brand, we craft solutions that move with your vision — bold,
              fluid, and unforgettable.
            </p>
            <a href="#contact">
              <button className="btn btn-primary bg-[#FF6B6B] border-0">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero