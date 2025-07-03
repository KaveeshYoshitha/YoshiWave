const Services = () => {
  return (
    <section
      id="services"
      className="bg-transparent py-20 px-4 sm:px-6 md:px-10 lg:px-24 text-gray-800"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#00BFA6]">
          Our Services
        </h2>
        <p className="text-white mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          At Yoshiwave, we specialize in tailored digital solutions to help your
          brand grow — with precision, creativity, and modern tech.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Service Item 1 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              Website Development
            </h3>
            <p className="text-white text-sm sm:text-base">
              We create modern, responsive, and scalable websites tailored to
              your business goals — using the latest technologies.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              POS Systems
            </h3>
            <p className="text-white text-sm sm:text-base">
              Speed up your sales and manage your store with our simple, robust
              Point of Sale systems — custom-built for your industry.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              CRM Platforms
            </h3>
            <p className="text-white text-sm sm:text-base">
              Track leads, automate customer interactions, and improve team
              productivity with our CRM tools built from the ground up.
            </p>
          </div>

          {/* Service Item 4 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              Custom Software
            </h3>
            <p className="text-white text-sm sm:text-base">
              We build powerful, tailor-made software solutions — from internal
              dashboards to full automation tools that fit your workflow.
            </p>
          </div>

          {/* Service Item 5 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              WordPress Sites
            </h3>
            <p className="text-white text-sm sm:text-base">
              Professional WordPress websites using premium themes like Divi or
              Astra — optimized for speed, SEO, and conversions.
            </p>
          </div>

          {/* Service Item 6 */}
          <div className="bg-transparent border-2 border-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FF6B6B]">
              E-Commerce Integration
            </h3>
            <p className="text-white text-sm sm:text-base">
              Launch your online store with secure payments, modern product
              pages, and order management tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
