import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../useContext/CartContext";
import CartItem from "../Comp/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({ id }) => {
  const handleProduct = useNavigate();
  const { cartProducts, removeAll } = useContext(CartContext);
  return cartProducts.length > 0 ? (
    <>
      <div className="mt-10 w-full">
        <div className="bg-[#eaded7] text-[#b99179] md:text-4xl text-2xl px-2  py-10 w-full md:px-40 ">
          <Link to="/">Home</Link> /<span>Cart</span>
        </div>
        <div className="flex md:flex-row  text-gray-500  md:px-28 px-2 justify-between   mt-20 items-center   w-full">
          <div>Item</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>SubTotal</div>
        </div>
        <hr className="mt-4 border-2 border-gray-100  mx-auto max-w-7xl " />
        {cartProducts.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <hr className="mt-4 border-2 border-gray-100  mx-auto max-w-7xl " />
        <div className="flex flex-row text-sm px-2 justify-between md:px-28 gap-1 mt-3">
          <div>
            <button
              onClick={() => handleProduct(`/products`)}
              className="bg-[#A0522D] text-white py-1 px-2 md:px-3"
            >
              Continue Shopping
            </button>
          </div>
          <div>
            <button
              onClick={() => removeAll(id)}
              className="bg-black text-white py-1 px-2 md:px-3"
            >
              Clear Shopping Cart
            </button>
          </div>
        </div>
        <div className=" flex justify-end mt-8 gap-2 px-10 md:px-32 ">
          <div className=" border-2 py-3 px-28">
            Total:
            <div>
              $
              {cartProducts
                .reduce((total, item) => total + item.price * item.qty, 3.45)
                .toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="-mt-20 flex flex-col space-y-6 justify-center items-center h-[100vh]">
      <h1 className="md:text-3xl text-2xl font-bold">Your Cart is Empty</h1>
      <div>
        <button
          onClick={() => handleProduct(`/products`)}
          className="bg-[#8B4513] text-white py-3 px-6"
        >
          FIll It
        </button>
      </div>
    </div>
  );
};

export default Cart;
