import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamWork from '../assets/team-work.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Subtitle animation
    gsap.from(".about-subtitle", {
      scrollTrigger: {
        trigger: ".about-subtitle",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Content stagger animation
    gsap.from(".about-content > div", {
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });

    // Image animation
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    });
  }, { scope: container });

  return (
    <section
      id="about"
      ref={container}
      className="bg-transparent py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="about-title text-3xl sm:text-4xl font-bold text-center mb-6 text-[#00BFA6]">
          About Us
        </h2>
        <p className="about-subtitle text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 text-white">
          At <span className="font-bold text-[#00BFA6]">Yoshiwave</span>, we believe in the power of elegant digital craftsmanship.
          Whether you're a local business, creative startup, or personal brand — we craft websites and systems that work beautifully,
          speak clearly, and scale smartly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="about-content space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6B6B] mb-2">Our Story</h3>
              <p>
                Founded by passionate developers and designers, Yoshiwave began with a simple mission: to bridge the gap between ideas
                and execution through modern technology. We started small, working on portfolio sites, POS systems, and business tools —
                now we help clients across industries build smarter.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6B6B] mb-2">What Drives Us</h3>
              <p>
                Clean code, human-centered design, and genuine support. We don’t just build — we guide, solve, and grow with you.
              </p>
            </div>
          </div>

          <div className="about-image relative">
            <img
              src={TeamWork}
              alt="Team working together"
              width="100%"
              height="100%"
              className="rounded-xl shadow-xl object-cover w-full h-auto md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
