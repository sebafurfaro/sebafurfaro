import { createContext, useState, useContext, useEffect } from "react";
import { db } from "./../Firebase";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart([newCart]);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    const docs = [];
    db.collection("productos").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    });
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, productos}} >
      {children}
    </CartContext.Provider>
  );
};
