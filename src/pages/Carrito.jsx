import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import BotonPago from '../components/BotonPago';

export default function Carrito() {
  const { items, eliminarItem, total } = useCarrito();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
        <Link to="/productos" className="text-blue-600 mt-4 inline-block">Ver productos</Link>
      </div>
    );
  }

  const itemsMP = items.map(item => ({
    title: `${item.nombre} (${item.talle} - ${item.color})`,
    quantity: item.cantidad,
    unit_price: item.precio,
    currency_id: 'ARS'
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.idUnico} className="flex gap-4 border-b pb-4">
              <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.nombre}</h3>
                <p className="text-sm text-gray-600">Talle: {item.talle} | Color: {item.color}</p>
                <p className="text-sm">Cantidad: {item.cantidad}</p>
                <p className="font-bold">${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
              </div>
              <button onClick={() => eliminarItem(item.idUnico)} className="text-red-500 text-xl">🗑️</button>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Resumen</h2>
          <p className="flex justify-between text-lg">
            Total: <span className="font-bold">${total.toLocaleString('es-AR')}</span>
          </p>
          <BotonPago items={itemsMP} />
        </div>
      </div>
    </div>
  );
}