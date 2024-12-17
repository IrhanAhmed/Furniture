import Image from "next/image";
import BlackChair from "../../public/blackchair1.png"

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      image: "/greensofa.png",
      name: "The Poplar suede sofa",
      price: "£980",
      width: 600,
      height: 375,
    },
    {
      id: 2,
      image: "/Chair.png",
      name: "The Dandy chair",
      price: "£250",
      width: 350,
      height: 375,
    },
    {
      id: 3,
      image: "/blackchair1.png",
      name: "The Dandy chair",
      price: "£250",
      width: 320,
      height: 375,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12 px-8">
        <h2 className="text-4xl font-semibold text-gray-800">Our Popular Products</h2>
      </div>

      <Image src={BlackChair} alt="ad" height={200} width={200} />


      <div className="flex flex-wrap justify-center gap-8 px-8 items-start">
        {products.map((product) => (
          <div key={product.id}>
            <div
              className="relative w-[product.width] h-[product.height]"
            >
              
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                width={product.width}
                height={product.height}
                className="object-cover shadow-md rounded-md"
              />
            </div>
            <div className="text-center mt-2 px-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition">
          View Collection
        </button>
      </div>

      <div className="mt-20 border-8 border-white bg-gray-200 p-8 rounded-lg w-full text-center">
        <h1 className="text-4xl mb-4">Join the club and get the benefits</h1>
        <div className="mt-4 text-sm text-gray-600 leading-relaxed">
          <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.</p>
        </div>
        <div className="mt-10 flex justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="border border-gray-300 rounded-md px-4 py-2 w-2/3 max-w-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
            Sign up
          </button>
        </div>
      </div>

      <div className="mt-20 border-4 border-gray-300 bg-white rounded-md shadow-md p-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-semibold mb-">From a studio in London to a global brand with</h1>
            <h1 className="text-3xl font-semibold">over 400 outlets</h1>
            <p className="text-2xl mt-8">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className="bg-gray-300 py-4 px-8 mt-14" 
            >Get In Touch</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center p-6">
            <img
              src="/graysofa.png"
              alt="Image of a chair"
              width={500}
              height={375}
              className="w-3/4 h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
