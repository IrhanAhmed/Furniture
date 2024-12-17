import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
     
      <div className="bg-white py-12 px-4 sm:px-6 shadow-md rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
         
          <div className="space-y-4 text-left sm:text-left md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-2xl text-gray-800 leading-tight mb-4">
              A brand built on the love of craftsmanship, quality and outstanding customer service
            </h1>
          </div>

         
          <div className="flex justify-start md:justify-end mt-2 md:mt-0">
            
            <button className="px-4 py-2 sm:px-6  sm:py-3 bg-gray-200 text-gray-600 rounded-md hover:bg-blue-700 transition">
              View Collection
            </button>
          </div>
        </div>
      </div>

      
      <div className="relative bg-[rgba(42,37,75,1)] shadow-md p-6 sm:p-8 md:p-12 rounded-lg mb-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          
          <div className="space-y-4 leading-tight text-left sm:text-left md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-3xl text-white leading-tight mb-4">
              It started with a small idea
            </h1>
            <p className="text-white leading-relaxed mb-4 sm:mb-6">
              A global brand built on craftsmanship, quality, and excellence. Established in a small studio in South London in early 2001.
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 mt-2 md:mt-0 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-700 transition">
              View Collection
            </button>
          </div>

          
          <div className="relative w-full max-w-xs md:max-w-md mx-auto">
            <Image
              src="/77.png"
              alt="About Me"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      
      <div className="relative bg-gray-100 shadow-md p-6 sm:p-8 md:p-12 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          
          <div className="relative w-full max-w-sm md:max-w-md mx-auto">
            <Image
              src="/99.png"
              alt="Innovation"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
          </div>

         
          <div className="space-y-4 text-gray-700 leading-tight text-left sm:text-left md:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl leading-snug mb-4">
              Our service isn’t just personal, it’s actually hyper personally exquisite
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
              When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became the hotbed for the London interior design community.
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
