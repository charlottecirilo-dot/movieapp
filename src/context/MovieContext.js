import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (show) => setFavorites((s) => [...s, show]);
  const removeFavorite = (id) => setFavorites((s) => s.filter((f) => f.id !== id));

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
