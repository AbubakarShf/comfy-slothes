import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ id, img, title, price }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav(`/products/${id}`);
  };
  return (
    <div>
      <div>
        <img src={img} className="w-[310px] h-[230px]" onClick={handleNav} />
      </div>
      <div className="flex flex-row gap-16 justify-center py-3 ">
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
