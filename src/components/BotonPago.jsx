import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Credenciales de la cuenta de prueba vendedor
initMercadoPago('APP_USR-8d9bc2e8-73fd-4116-86a1-7c9b5623c5a3');

export default function BotonPago({ items }) {
  const [preferenceId, setPreferenceId] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const crearPreferencia = async () => {
      if (!items || items.length === 0) return;
      setCargando(true);
      try {
        const response = await axios.post('http://localhost:5000/api/create_preference', { items });
        setPreferenceId(response.data.id);
      } catch (error) {
        console.error('Error al crear preferencia:', error);
        alert('Error al conectar con pagos. ¿El backend está corriendo?');
      } finally {
        setCargando(false);
      }
    };
    crearPreferencia();
  }, [items]);

  if (cargando) {
    return <button disabled className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg">Cargando...</button>;
  }

  if (!preferenceId) {
    return <button disabled className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg">Error en pago</button>;
  }

  return (
    <div className="mt-4">
      <Wallet initialization={{ preferenceId }} />
    </div>
  );
}