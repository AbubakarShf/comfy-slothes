import React, { useState, useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartContext from "../useContext/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-row  gap-3 px-10 md:px-10 space-x-2 items-center justify-between py-5">
        <div>
          <img
            onClick={() => nav(`/`)}
            className="cursor-pointer md:w-[300px] w-[230px]"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
          />
        </div>
        <div>
          <div className="hidden md:flex text-xl items-center text-xl  flex-row space-x-7">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart" className="relative -top-4 items-center">
              <span className="relative top-2 left-5 text-purple-800"></span>
              <span className="absolute bottom-5 left-5  rounded-full text-sm  text-white bg-red-700 px-2">
                {cartProducts.length}
              </span>
              <BsFillCartFill size={32} className="white  mt-3" />
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="md:hidden flex flex-row items-center gap-5">
          {open ? (
            <AiOutlineClose
              size={40}
              onClick={handleOpen}
              className="text-black cursor-pointer "
            />
          ) : (
            <AiOutlineMenu
              size={36}
              onClick={handleOpen}
              className="text-[#8B4513] cursor-pointer "
            />
          )}
        </div>
        {open && (
          <div className="md:hidden flex flex-col font-bold text-2xl  bg-[#D2B48C] items-center space-y-20 h-[100vh] w-full fixed top-0 right-0 text-white  ">
            <AiOutlineClose
              size={40}
              onClick={handleOpen}
              className="text-white absolute left-7 mt-5 cursor-pointer "
            />
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <div className="flex flex-row space-x-5 font-bold text-2xl ">
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="relative -top-4 items-center cursor-pointer"
              >
                <span className="relative top-2 left-5 text-purple-800"></span>
                <BsFillCartFill size={32} className="white  mt-3" />
              </Link>
              <Link to="/login">Login</Link>
            </div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
