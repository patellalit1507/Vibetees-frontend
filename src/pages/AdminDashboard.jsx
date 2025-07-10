import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({ name: '', price: '', color: '', image: '' });

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(product),
    });
    setProduct({ name: '', price: '', color: '', image: '' });
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-4xl font-bebas neon-text text-center mb-6">Admin Dashboard</h2>
      <div className="bg-gray-800 p-4 rounded-lg max-w-md mx-auto">
        <h3 className="text-xl font-bebas text-white mb-4">Add Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Price</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Color</label>
            <input
              type="text"
              value={product.color}
              onChange={(e) => setProduct({ ...product, color: e.target.value })}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Image URL</label>
            <input
              type="text"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <button type="submit" className="w-full gradient-btn text-white font-bold py-2 rounded-lg">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}