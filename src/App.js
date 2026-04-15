import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import DetalleProducto from './pages/DetalleProducto';

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;