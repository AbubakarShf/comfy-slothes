import React, { useContext } from "react";
import CartContext from "../useContext/CartContext";

const CartItem = ({ item }) => {
  const { subQty, decreases, add } = useContext(CartContext);
  const { id, img, price, qty, title } = item;
  const calc = () => {
    (price * qty).toFixed(2);
  };
  return (
    <>
      <div className="flex md:flex-row md:px-24 ml-4  md:ml-7 justify-center  mt-20 mx-auto max-w-full px-2 items-center  justify-between ">
        <div className="flex flex-row md:gap-10 gap-1 ">
          <img src={img} className="w-[120px] h-[90px] hidden md:block  " />

          <div className="space-y-2 md:text-md text-xs">
            <h1 className="w-[80px]">{title}</h1>
            <h1>${price}</h1>
          </div>
        </div>
        <div className="flex flex-row md:gap-4 gap-1 md:text-xl text-md">
          <button onClick={() => add(id)}>+</button>
          <button>{qty}</button>

          <button onClick={() => decreases(id)}>-</button>
        </div>
        <div className="flex items-center md:text-md text-sm ">
          <p>${price}</p>
        </div>
        <div className="flex items-center text-md text-sm">
          <button className="bg-red-700    " onClick={() => subQty(id)}>
             🗑
          </button>
        </div>

        <div>{calc(price * qty)}</div>
      </div>
    </>
  );
};

export default CartItem;
