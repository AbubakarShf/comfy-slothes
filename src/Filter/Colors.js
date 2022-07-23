import React, { useContext } from "react";
import CartContext from "../useContext/CartContext";

const Colors = () => {
  const { handleFilter } = useContext(CartContext);
  return (
    <>
      <div className="text-start  md:mr-8 mr-8 ">
        <div>
          <h1 className="font-bold text-xl">Colors</h1>
        </div>
        <div className="flex flex-row gap-2 text-start  mt-6 ">
          <button
            onClick={() => handleFilter("colors", "")}
            className="text-gray-400"
          >
            All
          </button>
          <button
            onClick={() => handleFilter("colors", "red")}
            className="bg-red-500 rounded-full px-3"
          ></button>
          <button
            onClick={() => handleFilter("colors", "green")}
            className="bg-green-500 rounded-full px-3 "
          ></button>
          <button
            onClick={() => handleFilter("colors", "blue")}
            className="bg-blue-500 rounded-full px-3 "
          ></button>
          <button
            onClick={() => handleFilter("colors", "black")}
            className="bg-black rounded-full px-3 "
          ></button>
          <button
            onClick={() => handleFilter("colors", "yellow")}
            className="bg-yellow-400 rounded-full px-3"
          ></button>
        </div>
      </div>
    </>
  );
};

export default Colors;
