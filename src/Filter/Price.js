import React, { useContext, useState } from "react";
import CartContext from "../useContext/CartContext";
import Data from "../data";

const Price = () => {
  const [price, setPrice] = useState(0);

  const { restart } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col text-start w-[200px]  mt-5  ">
        <div>
          <h1 className="font-bold text-xl">Price</h1>
          <p></p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <span>$0</span>
            <span>$4,000</span>
          </div>
          <input type="range" />
        </div>
        <div className="flex flex-row justify-between">
          <label htmlFor="shipping">Free Shipping</label>

          <input
            type="checkbox"
            min={0}
            max={4000}
            name="shipping"
            id="shipping"
          />
          {Data.filter((Item) => {
            return Item.price > price;
          })}
        </div>

        <div className="mt-6">
          <button className="bg-red-700 py-2 px-4 text-white" onClick={restart}>
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Price;
