import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export default function ProductCard({ producto }) {
  const { agregarAlCarrito } = useCarrito();

  const handleAgregar = () => {
    const talle = producto.talles[0];
    const color = producto.colores[0];
    agregarAlCarrito(producto, talle, color, 1);
    alert('✅ Agregado al carrito');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.imagen} alt={producto.nombre} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
      </Link>
      <div className="p-4">
        <Link to={`/producto/${producto.id}`}>
          <h3 className="font-semibold text-lg text-gray-800">{producto.nombre}</h3>
        </Link>
        <p className="text-gray-600 mt-1">${producto.precio.toLocaleString('es-AR')}</p>
        <button
          onClick={handleAgregar}
          className="mt-3 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}