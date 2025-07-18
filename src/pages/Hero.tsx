import teamImg from '../assets/team.png';

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="hero bg-transparent min-h-screen"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={teamImg}
            width=" 100%"
            height="100%"
            alt="Team"
            className="max-w-sm rouned-lg shadow-2xl border-0"
          />
          <div>
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