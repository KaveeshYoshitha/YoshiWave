import TeamWork from '../assets/team-work.png'

const About = () => {
  return (
    <section
      id="about"
      className="bg-transparent py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#00BFA6]">
          About Us
        </h2>
        <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 text-white">
          At <span className="font-bold text-[#00BFA6]">Yoshiwave</span>, we believe in the power of elegant digital craftsmanship.
          Whether you're a local business, creative startup, or personal brand — we craft websites and systems that work beautifully,
          speak clearly, and scale smartly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-sm sm:text-base">
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

          <div className="relative">
            <img
              src={TeamWork}
              alt="Team working together"
              className="rounded-xl shadow-xl object-cover w-full h-auto md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
