import React, { useContext } from "react";
import CartContext from "../useContext/CartContext";

const Category = () => {
  const { getAll, handleFilter } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col py-2 space-y-4 text-start  items-center">
        <div className=" text-start space-y-3 w-[200px]">
          <div>
            <h1 className="font-bold  text-lg">Category</h1>
          </div>

          <div>
            <button onClick={getAll} className="text-sm md:text-lg">
              All
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "office")}
              className="text-md md:text-lg"
            >
              Office
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "living room")}
              className="text-md md:text-lg"
            >
              Living Room
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "kitchen")}
              className="text-md md:text-lg"
            >
              Kitchen
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "bedroom")}
              className="text-md md:text-lg"
            >
              Bedroom
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "dining")}
              className="text-md md:text-lg"
            >
              Dining
            </button>
          </div>
          <div>
            <button
              onClick={() => handleFilter("type", "kids")}
              className="text-md md:text-lg"
            >
              Kids
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
