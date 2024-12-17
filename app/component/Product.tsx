type ProductCardProps = {
    name: string;
    price: number;
    image: string;
  };
  
  const ProductCard = ({ name, price, image }: ProductCardProps) => {
    return (
      <div className="product-card">
        <img src={image} alt={name} className="w-32 h-32 object-cover" />
        <h3 className="text-lg">{name}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  