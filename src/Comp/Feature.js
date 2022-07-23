import React, { useContext } from "react";
import Card from "./Card";
import CartContext from "../useContext/CartContext";

const Feature = () => {
  const { products } = useContext(CartContext);
  return (
    <>
      <div className="bg-blue-50 ">
        <div className="mt-20 text-center">
          <h1 className="md:text-5xl py-12 text-4xl font-bold">
            Feature Products
          </h1>
        </div>
        <div className="flex md:flex-row justify-center gap-6 py-16 flex-wrap px-6  items-center  w-full">
          {products.slice(0, 3).map(({ id, title, price, img, handleNav }) => (
            <Card
              key={id}
              id={id}
              title={title}
              price={price}
              img={img}
              handleNav={handleNav}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
