import Image from "next/image";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      image: "/Large.png",
      name: "The Poplar suede sofa",
      price: "£980",
      width: 500,
      height: 375,
    },
    {
      id: 2,
      image: "/parent2.png",
      name: "The Dandy chair",
      price: "£250",
      width: 250,
      height: 375,
    },
    {
      id: 3,
      image: "/blackchair.png",
      name: "The Dandy chair",
      price: "£250",
      width: 250,
      height: 375,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Main Heading - Above Products */}
      <div className="text-center mb-12 px-8">
        <h2 className="text-4xl font-semibold text-gray-800">Our Popular Products</h2>
      </div>

      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 px-8 items-start">
        {products.map((product) => (
          <div
            key={product.id}
            
          >
            {/* Dynamically Set Sized Image */}
            <div
              className="relative"
              style={{
                width: `${product.width}px`,
                height: `${product.height}px`,
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                layout="responsive"
                width={product.width}
                height={product.height}
                className="object-cover shadow-md"
              />
            </div>

            {/* Product Details Section */}
            <div className="text-center mt-2 px-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 transition"
    
        >
          View Collection
        </button>
      </div>

      {/* "Join the Club" Section */}
      <div
        className="mt-20 border-8 border-white bg-gray-200 p-8 rounded-lg w-full text-center"
        style={{
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: "8px",
        }}
      >
        <h1 className="text-4xl mb-4">Join the club and get the benefits</h1>

        <div className="mt-4 text-sm text-gray-600 leading-relaxed">
          <p>Sign up for our newsletter and receive exclusive offers on new</p>
          <p className="mt-2">ranges, sales, pop-up stores, and more.</p>
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

      {/* Two-Side Section with Text & Image */}
      <div className="mt-20 border-4 border-gray-300 bg-white rounded-md shadow-md p-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-semibold mb-4">
              From a studio in London to a global brand with
            </h1>
            <h1 className="text-3xl font-semibold">over 400 outlets</h1>
          </div>

          {/* Right Side with Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6">
            <img
              src="/Image.png" // Replace with your image path
              alt="Chair"
              className="w-3/4 h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
