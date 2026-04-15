import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import productosData from '../data/productos.json';

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();
  const [producto, setProducto] = useState(null);
  const [talleSeleccionado, setTalleSeleccionado] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const prod = productosData.find(p => p.id === parseInt(id));
    if (prod) {
      setProducto(prod);
      setTalleSeleccionado(prod.talles[0]);
      setColorSeleccionado(prod.colores[0]);
    } else {
      navigate('/productos');
    }
  }, [id, navigate]);

  if (!producto) return <div className="text-center py-16">Cargando...</div>;

  const handleAgregar = () => {
    agregarAlCarrito(producto, talleSeleccionado, colorSeleccionado, cantidad);
    alert('✅ Producto agregado al carrito');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={producto.imagen} alt={producto.nombre} className="w-full rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
          <p className="text-2xl text-gray-800 font-semibold mb-4">${producto.precio.toLocaleString('es-AR')}</p>
          <p className="text-gray-600 mb-6">{producto.descripcion}</p>

          <div className="mb-4">
            <label className="block font-medium mb-1">Talle</label>
            <div className="flex gap-2">
              {producto.talles.map(t => (
                <button
                  key={t}
                  onClick={() => setTalleSeleccionado(t)}
                  className={`px-4 py-2 border rounded-md ${talleSeleccionado === t ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Color</label>
            <div className="flex gap-2">
              {producto.colores.map(c => (
                <button
                  key={c}
                  onClick={() => setColorSeleccionado(c)}
                  className={`px-4 py-2 border rounded-md ${colorSeleccionado === c ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">Cantidad</label>
            <input
              type="number"
              min="1"
              max={producto.stock}
              value={cantidad}
              onChange={e => setCantidad(parseInt(e.target.value))}
              className="border rounded-md px-3 py-2 w-24"
            />
          </div>

          <button
            onClick={handleAgregar}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition w-full md:w-auto"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}