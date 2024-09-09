// For TypeScript projects using React 17 or later,
// you no longer need to import React at the top of every file
// due to the new JSX transform.
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
