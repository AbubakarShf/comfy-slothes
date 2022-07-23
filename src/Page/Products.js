import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../Comp/Product";
import Search from "../Filter/Search";
import Category from "../Filter/Category";
import Company from "../Filter/Company";
import Colors from "../Filter/Colors";
import Price from "../Filter/Price";
import CartContext from "../useContext/CartContext";

const Products = () => {
  const { products } = useContext(CartContext);

  return (
    <>
      <div className="bg-[#eaded7] text-[#b99179] md:text-4xl text-2xl px-10 py-10 w-full md:px-20 ">
        <Link to="/">Home</Link> / <span>Products</span>
      </div>

      <div className="flex md:flex-row flex-col mt-10 ">
        <div className="md:sticky md:h-screen md:top-0 md:px-12 px-3  ">
          <div className="justify-center flex flex-col items-center mb-10">
            <Search />
            <Category />
            <Company />
            <Colors />
            <Price />
          </div>
        </div>
        <div className=" flex md:flex-row flex-wrap  gap-10 w-full px-2 items-center justify-center  ">
          {products.map(({ id, title, price, img, handleNav }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              handleNav={handleNav}
              img={img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
