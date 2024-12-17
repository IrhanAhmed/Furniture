import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgba(42,37,75,1)] text-white py-12">
  
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        
          <div>
            <h3 className="text-lg font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">
                <Link href="/All-Products" className="hover:text-white">All Products</Link>
              </li>
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
              <li className="hover:text-white cursor-pointer">Recently Viewed</li>
              <li className="hover:text-white cursor-pointer">Popular This Week</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Crockery</li>
              <li className="hover:text-white cursor-pointer">Furniture</li>
              <li className="hover:text-white cursor-pointer">Homeware</li>
              <li className="hover:text-white cursor-pointer">Plant Pots</li>
              <li className="hover:text-white cursor-pointer">Kitchenware</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
            <Link href="/About-me" className="hover:text-white">About Us</Link>
              <li className="hover:text-white cursor-pointer">Vacancies</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Return Policy</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Join Our Mailing List</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-l-md px-3 py-2 focus:outline-none w-3/4 max-w-md text-black bg-[#6b6a71] "
              />
              <button
                className="bg-white text-black px-3 py-2 rounded-r-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

  
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-300 flex justify-between items-center px-6 md:px-12">
        <p>&copy; {new Date().getFullYear()} Copyright 2022 Avion LTD</p>
        
        
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="https://skype.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaSkype className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
