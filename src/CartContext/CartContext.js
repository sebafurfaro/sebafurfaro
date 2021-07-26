import { createContext, useState, useContext, useEffect } from "react";
import { db } from "./../Firebase";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  // adding products to cart
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartE) => {
        if (cartE.id === item.id) {
          return { ...cartE, quantity: cartE.quantity + quantity };
        } else return cartE;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  // deleting products from cart
  const delItemCart = (item) => {
    const newCart = cart.filter((itemInCart) => item.id !== itemInCart.id);
    setCart(newCart);
  };

  // show total price
  const totalPrice = () => {
    const newCart = cart.map((item) => item.price)
  }
    


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
    <CartContext.Provider
      value={{ cart, setCart, clearCart, addToCart, delItemCart, totalPrice, productos }}
    >
      {children}
    </CartContext.Provider>
  );
};
