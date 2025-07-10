import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card bg-gray-800 rounded-lg overflow-hidden">
      <LazyLoadImage
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        effect="blur"
      />
      <div className="p-4">
        <h3 className="text-xl font-bebas text-white">{product.name}</h3>
        <p className="text-gray-400 text-sm">{product.color}</p>
        <p className="text-lg font-bold text-neonCyan">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full py-2 gradient-btn text-white font-bold rounded-lg text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}