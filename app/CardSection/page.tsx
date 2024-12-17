

const products = [
  {
    id: 1,
    title: "Graystone vase",
    description: "A timeless ceramic vase with a soft grey glaze",
    price: 85,
    image: "/Graystonevase.png",
  },
  {
    id: 2,
    title: "Basic white vase",
    description: "Beautiful and simple - a classic design",
    price: 125,
    image: "/Basicwhitevase.png",
  },
];

const CartPage = () => {
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <main className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl bg-white p-4 md:p-6 rounded-lg shadow-md">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 md:mb-6 text-left">
            Your Shopping Cart
          </h2>

        
          <div className="hidden md:flex justify-between items-center text-gray-600 font-semibold border-b pb-3 mb-4">
            <span className="w-1/3">Product</span>
            <span className="w-1/3 text-center">Quantity</span>
            <span className="w-1/3 text-right">Total</span>
          </div>

        
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6 border-b pb-4"
            >
              
              <div className="flex items-center w-full md:w-1/3">
                <img
                  src={product.image}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="ml-3">
                  <span className="text-lg md:text-sm text-gray-700 font-medium block">{product.title}</span>
                  <span className="text-sm text-gray-500">{product.description}</span>
                </div>
              </div>

             
              <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-12 md:w-20 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

          
              <div className="w-full md:w-1/3 text-right text-gray-700 font-semibold">
                £{product.price}
              </div>
            </div>
          ))}
        </div>

        
        <div className="container mx-auto max-w-6xl bg-white p-4 md:p-6 mt-4 md:mt-6 rounded-lg shadow-md text-right">
          <div className="text-gray-600 font-semibold">Subtotal:</div>
          <div className="text-gray-800 font-bold text-xl">£{subtotal}</div>
          <p className="text-sm text-gray-500 mt-2">
            Taxes and shipping are calculated at checkout.
          </p>
          
          <button className="mt-4 bg-black text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-gray-800 transition duration-200">
            Go to Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
