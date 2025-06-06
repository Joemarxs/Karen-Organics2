import React, { useState } from 'react';
import { useCart } from './CartContext';
import { ShoppingCart } from 'lucide-react';
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
};
type ProductCardProps = {
  product: Product;
};
export function ProductCard({
  product
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const {
    addItem
  } = useCart();
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      unit: product.unit
    });
    setQuantity(1);
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {product.name}
        </h3>
        <p className="text-brown-600 mb-3">{product.description}</p>
        <p className="text-brown-800 font-bold mb-3">
          ${product.price.toFixed(2)} / {product.unit}
        </p>
        <div className="flex items-center gap-3">
          <input type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value)))} className="w-20 px-2 py-1 border border-brown-300 rounded-md" />
          <button onClick={handleAddToCart} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>;
}