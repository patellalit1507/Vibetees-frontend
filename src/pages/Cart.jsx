import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-4xl font-bebas neon-text text-center mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-300 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bebas text-white">{item.name}</h3>
                <p className="text-gray-400">{item.color}</p>
                <p className="text-lg font-bold text-cyan-400">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}