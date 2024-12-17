import Link from "next/link";

const NewCeramicsSection = () => {
  const ceramics = [
    {
      id: 1,
      image: "/chair.png",
      title: "The Dandy Chair",
      price: "£250",
    },
    {
      id: 2,
      image: "/parent1.png",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      id: 3,
      image: "/parent4.png",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      id: 4,
      image: "/parent3.png",
      title: "The Lucy Lamp",
      price: "£399",
    },
  ];

  return (
    <section className="py-8 bg-white text-left m-4 sm:m-8 lg:m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-12">
        {ceramics.map((item) => (
          <Link
            key={item.id}
            href={`/Products/${item.id}`} 
            className="flex flex-col items-center text-center relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-3/4 sm:w-2/3 md:w-3/4 lg:w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-sm sm:text-lg md:text-base font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewCeramicsSection;
