import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Carrusel de banners */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide">
          {/* Slide 1 */}
          <div className="relative min-w-full">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=500&fit=crop" 
              alt="Colección de remeras" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Nueva Colección</h2>
                <p className="text-xl md:text-2xl mb-4">Remeras Oversize - 30% off</p>
                <Link to="/productos" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition">
                  Comprar ahora
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative min-w-full">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop" 
              alt="Ropa urbana" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Estilo Urbano</h2>
                <p className="text-xl md:text-2xl mb-4">Envíos gratis en toda la Argentina</p>
                <Link to="/productos" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative min-w-full">
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=500&fit=crop" 
              alt="Buzos y camperas" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Temporada Otoño/Invierno</h2>
                <p className="text-xl md:text-2xl mb-4">Buzos y camperas con diseños exclusivos</p>
                <Link to="/productos" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de bienvenida (opcional, debajo del carrusel) */}
      <div className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">BARDA CLOTHING</h1>
          <p className="text-xl text-gray-600 mb-8">Ropa urbana con estilo y comodidad</p>
          <Link to="/productos" className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-900 transition">
            Comprar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}