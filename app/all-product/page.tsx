import Image from "next/image";

// Product Array with Individual Dimensions for Each Product
const products = [
  { id: 1, name: "The Dandy Chair", price: 250, image: "/chair.png", width: 305, height: 375 },
  { id: 2, name: "Rustic Vase Set", price: 155, image: "/parent1.png", width: 305, height: 375 },
  { id: 3, name: "The Lucy Lamp", price: 399, image: "/parent3.png", width: 305, height: 375 },
  { id: 4, name: "The Silky Vase", price: 175, image: "/parent4.png", width: 305, height: 375 },
  { id: 5, name: "Rustic Vase Set", price: 155, image: "/parent1.png", width: 305, height: 375 },
  { id: 6, name: "The Silky Vase", price: 175, image: "/parent4.png", width: 305, height: 375 },
  { id: 7, name: "The Shelly Lights", price: 250, image: "/22.png", width: 305, height: 375 },
  { id: 8, name: "Rustic vase Set", price: 250, image: "/33.png", width: 305, height: 375 },
  { id: 9, name: "The Lucy Lamp", price: 250, image: "/44.png", width: 305, height: 375 },
  { id: 10, name: "The Silky Vase", price: 250, image: "/55.png", width: 305, height: 375 },
  { id: 11, name: "The Lucy Lamp", price: 250, image: "/parent3.png", width: 305, height: 375 },
  { id: 12, name: "The Dandy Chair", price: 250, image: "/chair.png", width: 305, height: 375 },
];

// ProductCard Component
type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  width: number;
  height: number;
};

const ProductCard = ({ name, price, image, width, height }: ProductCardProps) => {
  return (
    <div className="product-card p-4 shadow-md rounded-md bg-white">
      <div className="w-full relative mb-2">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
      <p className="text-gray-500">${price}</p>
    </div>
  );
};

// Categories Component
const Categories = () => {
  const categories = ["Category", "Product Type", "Price", "Brands"];

  return (
    <div className="py-4 bg-gray-100 border-b">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex space-x-6 justify-start overflow-auto md:overflow-visible md:flex-wrap categories-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-gray-700 font-semibold py-2 px-4 bg-white shadow-sm rounded-md hover:bg-blue-100 transition cursor-pointer flex items-center space-x-2"
            >
              <span>{category}</span>
              <span className="text-gray-500">▼</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// All Products Page
export default function AllProductsPage() {
  return (
    <div>
      {/* All Products Title Section */}
      <div className="py-8 md:py-16 bg-blue-500 text-white">
        <div className="container mx-auto max-w-screen-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
        </div>
      </div>

      {/* Categories Section */}
      <Categories />

      {/* Products Grid Section */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                width={product.width}
                height={product.height}
              />
            ))}
          </div>
        </div>
      </div>

      {/* View Collection Button Section */}
      <div className="py-8 md:py-12 bg-white flex justify-center">
        <button className=" text-gray-900 px-6 py-3 rounded-md bg-gray-300 transition duration-200">
          View Collection
        </button>
      </div>
    </div>
  );
}