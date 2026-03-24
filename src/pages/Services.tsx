import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // We get the total width to scroll based on the container's scrollWidth minus the viewport width
      const getScrollAmount = () => {
        let containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth + (window.innerWidth * 0.1)); // adding a little padding to the end
      };

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        // Cleanup if necessary
      };
    });
  }, { scope: sectionRef });

  const cardClass = "bg-[#111] bg-opacity-40 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 w-full md:w-[45vw] lg:w-[30vw] shrink-0 flex flex-col justify-center";

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-transparent py-20 px-4 sm:px-6 md:px-10 lg:px-24 text-gray-800 overflow-hidden flex flex-col justify-center md:min-h-screen relative"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12 shrink-0">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#00BFA6]">
          Our Services
        </h2>
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto">
          At Yoshiwave, we specialize in tailored digital solutions to help your
          brand grow — with precision, creativity, and modern tech.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="flex flex-col md:flex-row md:flex-nowrap gap-6 md:gap-10 md:w-max w-full items-stretch"
      >
        {/* Service Item 1 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            Website Development
          </h3>
          <p className="text-white text-sm sm:text-base">
            We create modern, responsive, and scalable websites tailored to
            your business goals — using the latest technologies.
          </p>
        </div>

        {/* Service Item 2 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            POS Systems
          </h3>
          <p className="text-white text-sm sm:text-base">
            Speed up your sales and manage your store with our simple, robust
            Point of Sale systems — custom-built for your industry.
          </p>
        </div>

        {/* Service Item 3 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            CRM Platforms
          </h3>
          <p className="text-white text-sm sm:text-base">
            Track leads, automate customer interactions, and improve team
            productivity with our CRM tools built from the ground up.
          </p>
        </div>

        {/* Service Item 4 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            Custom Software
          </h3>
          <p className="text-white text-sm sm:text-base">
            We build powerful, tailor-made software solutions — from internal
            dashboards to full automation tools that fit your workflow.
          </p>
        </div>

        {/* Service Item 5 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            WordPress Sites
          </h3>
          <p className="text-white text-sm sm:text-base">
            Professional WordPress websites using premium themes like Divi or
            Astra — optimized for speed, SEO, and conversions.
          </p>
        </div>

        {/* Service Item 6 */}
        <div className={cardClass}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
            E-Commerce Integration
          </h3>
          <p className="text-white text-sm sm:text-base">
            Launch your online store with secure payments, modern product
            pages, and order management tailored to your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
