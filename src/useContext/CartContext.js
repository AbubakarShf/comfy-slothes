import React, { createContext, useEffect, useState } from "react";
import Data from "../data";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setProducts(Data);
  }, []);
  const getAll = () => {
    setProducts(Data);
  };

  // if(price < value - 500 || price > value + 500)

  //search
  const searchProducts = (text) => {
    //set loading true
    if (text.trim() == "" || !text) {
      // set loading to false
    } else {
      setProducts(products);
      const searchedProducts = Data.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase())
      );

      // console.log(searchedProducts);
      setProducts(searchedProducts);
      // set loading false
    }
  };
  const handleFilter = (property, value) => {
    if (!value) return setProducts(Data);
    else if (property == "colors") {
      const results = [];
      for (let i = 0; i < Data.length; i++) {
        if (Data[i].colors.includes(value)) {
          results.push(Data[i]);
        }
      }
      setProducts(results);
    } else {
      const results = Data.filter((item) => item[property] == value);
      setProducts(results);
    }
  };

  const handleAddToCart = ({ id, price, img, qty, title, summary }) => {
    const exist = cartProducts.find((item) => item.id === id);

    if (exist) return alert("Item is already added to cart");
    else {
      return setCartProducts([
        ...cartProducts,
        { id, price, img, qty, title, summary },
      ]);
    }
  };

  const addQty = (id) => {
    const add = products.map((item) => {
      if (item.id === id) item.qty++;
      return item;
    });

    setProducts(add);
  };

  const handleDecrease = (id) => {
    const decrease = products.map((item) => {
      if (item.id === id) {
        if (item.qty > 1) {
          item.qty--;
        }
      }
      return item;
    });
    setProducts(decrease);
  };
  const add = (id) => {
    const adds = cartProducts.map((item) => {
      if (item.id === id) item.qty++;
      return item;
    });

    setCartProducts(adds);
  };

  const decreases = (id) => {
    const decreases = cartProducts.map((item) => {
      if (item.id === id) {
        if (item.qty > 1) {
          item.qty--;
        }
      }
      return item;
    });
    setCartProducts(decreases);
  };
  const removeAll = () => {
    setCartProducts("");
  };
  const subQty = (id) => {
    const remove = cartProducts.filter((item) => item.id !== id);
    setCartProducts(remove);
  };
  const restart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        handleFilter,
        setCartProducts,
        getAll,
        handleAddToCart,
        handleDecrease,
        addQty,
        subQty,
        add,
        decreases,
        removeAll,
        restart,
        searchProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContextProvider };
export default CartContext;
