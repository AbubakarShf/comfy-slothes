import React, { useContext, useState } from "react";
import CartContext from "../useContext/CartContext";

const Company = () => {
  const { handleFilter } = useContext(CartContext);
  const [company, setCompany] = useState();
  return (
    <>
      <div className="flex text-start w-[200px]  flex-col space-y-4 ">
        <div>
          <h1 className="font-bold text-xl ">Company</h1>
        </div>

        <select
          value={company}
          onChange={(e) => handleFilter("brand", e.target.value)}
          className="border-2 py-1 w-[90px] "
        >
          <option value="">All</option>
          <option value="marcos">marcos</option>
          <option value="liddy">liddy</option>
          <option value="Ikea">Ikea</option>
          <option value="caressa">caressa</option>
        </select>
      </div>
    </>
  );
};

export default Company;
