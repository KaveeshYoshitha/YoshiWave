import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY <= 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3 ${
        scrolled ? "bg-black/70 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full sm:max-w-7xl sm:mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <span className="text-4xl">{'{'}</span> Yoshi
          <span className="text-[#00BFA6]">Wave </span>
          <span className="text-4xl">{'}'}</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden border-1 p-2 px-5 rounded-full md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-[#00BFA6]">Home</a></li>
          <li><a href="#about" className="hover:text-[#00BFA6]">About</a></li>
          <li><a href="#services" className="hover:text-[#00BFA6]">Services</a></li>
          <li><a href="#contact" className="hover:text-[#00BFA6]">Contact</a></li>
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white py-4 px-6 space-y-3">
          <a href="#home" className="block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

