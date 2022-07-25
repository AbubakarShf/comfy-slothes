import React, { createContext, useContext, useState } from "react";
import CartContext from "../useContext/CartContext";
export const PriceContext = createContext(0);

const Price = () => {
  const [price, setPrice] = useState(100);
  const { restart } = useContext(CartContext);

  const handleInput=(e)=>{
    setPrice(e.target.value);
  }

  return (
    <PriceContext.Provider value={price}>

    <div className="flex flex-col text-start w-[200px]  mt-5  ">
        <div>
          <h1 className="font-bold text-xl">Price</h1>
          <p></p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <span>${price}</span>
            <span>$4,000</span>
          </div>
          <input
              type='range'
              onInput={handleInput}
              min={0}
              max={4000}
              name='priceFilter'
              id='priceFilter'
            />
        </div>
        <div className="flex flex-row justify-between">
          <label htmlFor="shipping">Free Shipping</label>

          <input
            type="checkbox"
            name="shipping"
            id="shipping"
          />

        </div>

        <div className="mt-6">
          <button className="bg-red-700 py-2 px-4 text-white" onClick={restart}>
            Clear Filter
          </button>
        </div>
      </div>
    </PriceContext.Provider>
  );
};

export default Price;