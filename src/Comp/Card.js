import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ img, title, price, id }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav(`/products/${id}`);
  };
  return (
    <>
      <div>
        <div>
          <img
            onClick={handleNav}
            src={img}
            className="h-[250px] w-[390px] cursor-pointer object-fill "
          />
        </div>
        <div className="py-3 flex flex-row gap-2 justify-between">
          <div className="md:text-xl  font-bold">
            <p>{title}</p>
          </div>
          <div>
            <p className="text-[#964B00]">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
