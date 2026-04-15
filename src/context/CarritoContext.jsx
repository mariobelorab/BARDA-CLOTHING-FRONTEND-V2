import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const agregarAlCarrito = (producto, talle, color, cantidad = 1) => {
    setItems(prev => {
      const index = prev.findIndex(i => i.id === producto.id && i.talle === talle && i.color === color);
      if (index !== -1) {
        const nuevo = [...prev];
        nuevo[index].cantidad += cantidad;
        return nuevo;
      }
      return [...prev, { ...producto, talle, color, cantidad, idUnico: Date.now() }];
    });
  };

  const eliminarItem = (idUnico) => {
    setItems(prev => prev.filter(i => i.idUnico !== idUnico));
  };

  const cantidadTotal = items.reduce((sum, i) => sum + i.cantidad, 0);
  const total = items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ items, agregarAlCarrito, eliminarItem, cantidadTotal, total }}>
      {children}
    </CarritoContext.Provider>
  );
};