import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm p-4 flex justify-between items-center z-20">
      <h1 className="text-3xl sm:text-4xl font-bebas neon-text animate-pulseNeon">GenZ Threads</h1>
      <nav className="flex space-x-3 sm:space-x-6">
        <a href="/home" className="text-white hover:text-neonCyan text-base sm:text-lg">Shop</a>
        <a href="/cart" className="text-white hover:text-neonPink text-base sm:text-lg">
          Cart ({cart.length})
        </a>
        {user ? (
          <>
            {user.role === 'admin' && (
              <a href="/admin" className="text-white hover:text-green-400 text-base sm:text-lg">Admin</a>
            )}
            <button onClick={logout} className="text-white hover:text-green-400 text-base sm:text-lg">
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="text-white hover:text-green-400 text-base sm:text-lg">Login</a>
        )}
      </nav>
    </header>
  );
}