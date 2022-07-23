import React, { useContext } from "react";
import CartContext from "../useContext/CartContext";

const Search = () => {
  const { searchProducts } = useContext(CartContext);
  return (
    <>
      <div>
        <input
          onChange={(e) => searchProducts(e.target.value)}
          type="search"
          placeholder="Search.."
          className="border-2 px-2 py-1 w-[188px] rounded-md"
        />
      </div>
    </>
  );
};

export default Search;
