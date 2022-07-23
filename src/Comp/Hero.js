import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const handleNav = useNavigate();
  return (
    <>
      <div className="py-10 flex w-full md:flex-row p-4  justify-center justify-between justify-around flex-wrap items-center ">
        <div className="flex flex-col space-y-6 w-[470px]  ">
          <h1 className="font-bold md:text-5xl text-2xl ">
            Design Your Comfort Zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <div>
            <button
              onClick={() => handleNav(`/products`)}
              className="bg-[#8B4513] text-white py-3 px-4 rounded-md"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="justify-center items-center flex mt-10">
          <div className="w-[100%]">
            <img
              src={require("../assets/Hero.jpg")}
              className="h-[400px] w-[520px] object-fill hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
