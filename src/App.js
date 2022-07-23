import React from "react";
import Header from "./Comp/Header";
import Home from "./Page/Home";
import About from "./Page/About";
import Products from "./Page/Products";
import Cart from "./Page/Cart";
import Login from "./Page/Login";
import Footer from "./Comp/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Page/Detail";
import { CartContextProvider } from "./useContext/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:detailId" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
