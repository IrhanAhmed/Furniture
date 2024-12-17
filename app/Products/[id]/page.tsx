"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "The Dandy Chair",
    price: "£250",
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    image: "/100.png",
    dimensions: {
      height: "300cm",
      width: "150cm",
      depth: "50cm",
    },
    features: [
      "Premium materials",
      "Handcrafted upholstery",
      "Quality finishes classic",
    ],
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: "£155",
    description: "Handmade rustic vase set.",
    image: "/parent1.png",
    features: [
      "Handmade craftsmanship",
      "Modern rustic design",
      "Perfect for gifting",
    ],
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: "£125",
    description: "Elegant and beautiful vase.",
    image: "/parent4.png",
    features: [
      "Elegant design",
      "Durable ceramic material",
      "Ideal for home decoration",
    ],
  },
  {
    id: 4,
    title: "The Lucy Lamp",
    price: "£399",
    description: "Modern and minimalistic lamp.",
    image: "/parent3.png",
    features: [
      "Modern design",
      "Eco-friendly lighting",
      "Energy-efficient",
    ],
  },
];

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;

  const product = products.find((item) => item.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">

      <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-8 md:space-y-0">

        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">{product.description}</p>

    
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {product.features?.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">•</span> {feature}
              </li>
            ))}
          </ul>

          
          <p className="text-xl font-semibold mb-4">{product.price}</p>


          {product.dimensions ? (
            <div className="text-sm text-gray-600 mb-6">
              <h3 className="font-semibold mb-2">Dimensions:</h3>
              <p>
                <span className="font-semibold">Height:</span> {product.dimensions.height}
              </p>
              <p>
                <span className="font-semibold">Width:</span> {product.dimensions.width}
              </p>
              <p>
                <span className="font-semibold">Depth:</span> {product.dimensions.depth}
              </p>
            </div>
          ) : (
            <div className="text-sm text-gray-600 mb-6">No dimensions available</div>
          )}

    
          <div className="mb-6 flex items-center space-x-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-0">Amount:</h3>
            <input
              type="number"
              defaultValue={1}
              className="border px-3 py-2 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

        
          <div>
            <button className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-900 transition duration-200 w-full md:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item.id} className="text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={305}
                height={150}
                className="rounded-lg shadow-md w-full"
              />
              <h4 className="text-sm font-semibold mt-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-white my-12 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl text-center mb-8">
          What Makes Our Brand Different
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: "🚚",
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day as standard.",
            },
            {
              icon: "🎨",
              title: "Made by true artisans",
              description:
                "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              icon: "💰",
              title: "Unbeatable prices",
              description:
                "For our materials and quality you won’t find better prices anywhere.",
            },
            {
              icon: "♻️",
              title: "Recycled packaging",
              description:
                "We use 100% recycled packaging to ensure our footprint is manageable.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>


      <div className="mt-12 text-center">
        <h1 className="text-2xl md:text-4xl mb-4">Join the club and get the benefits</h1>
        <div className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          <p>Sign up for our newsletter and receive exclusive offers on new</p>
          <p className="mt-2">ranges, sales, pop-up stores, and more.</p>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="border border-gray-300 rounded-md px-4 py-2 w-2/3 max-w-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
