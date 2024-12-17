const HeroSection = () => {
  return (
    <section className="flex flex-wrap items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 w-full h-auto bg-[rgba(42,37,75,1)] text-white mb-4 md:mb-8 border border-purple-500">
      
      {/* Left Content Section */}
      <div className="w-full sm:w-3/4 md:w-1/2 text-center md:text-left md:pr-8 mb-6 md:mb-0">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 mt-4 leading-tight">
          The furniture brand for the future, with timeless designs
        </h1>
        
        {/* Button Section */}
        <button 
          className="text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-opacity-90 mb-4"
          style={{ backgroundColor: "rgba(249, 249, 249, 0.15)" }}
        >
          View Collection
        </button>

        {/* Additional Paragraph */}
        <div className="text-sm sm:text-base text-gray-300 mt-2 md:mt-4 leading-snug">
          <p>
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors, and a beautiful way to display things digitally
            using modern web technologies.
          </p>
        </div>
      </div>

      {/* Right Image Section - Hidden on small devices */}
      <div className="hidden sm:block sm:w-3/4 md:w-1/2  items-center justify-center h-auto mt-4 md:mt-0">
        <img
          src="/Chair.png" // Replace with your image URL or import
          alt="Chair"
          className="w-auto h-auto max-w-[100%] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
