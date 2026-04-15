import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export default function Navbar() {
  const { cantidadTotal } = useCarrito();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          BARDA<span className="text-blue-600">CLOTHING</span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/productos" className="text-gray-600 hover:text-blue-600">Productos</Link>
          <Link to="/carrito" className="relative">
            🛒
            {cantidadTotal > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full px-1.5">
                {cantidadTotal}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}