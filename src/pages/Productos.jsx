import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productosData from '../data/productos.json';

export default function Productos() {
  const [categoria, setCategoria] = useState('todos');

  const categoriasUnicas = ['todos', ...new Set(productosData.map(p => p.categoria))];
  const filtrados = categoria === 'todos' ? productosData : productosData.filter(p => p.categoria === categoria);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {categoriasUnicas.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-4 py-2 rounded-full capitalize ${categoria === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtrados.map(prod => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}