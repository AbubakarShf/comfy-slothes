import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CartContext from "../useContext/CartContext";
import Picture from "./Picture";
const Detail = () => {
  const [selectedImg, setSelectedImg] = useState(Picture[0].img);
  const [DefaultImg, setDefaultImg] = useState("");
  const imgHandler1 = () => {
    setSelectedImg(Picture[0].img);
  };
  const imgHandler2 = () => {
    setSelectedImg(Picture[1].img);
  };
  const imgHandler3 = () => {
    setSelectedImg(Picture[2].img);
  };
  const imgHandler4 = () => {
    setSelectedImg(Picture[3].img);
  };
  const goTo = useNavigate();
  const { detailId } = useParams();
  const { products, handleAddToCart, handleDecrease, addQty } =
    useContext(CartContext);

  return (
    <>
      {products.map(
        ({
          id,
          summary,
          price,
          title,
          brand,
          img,
          qty,
          sku,
          available,
          colors,
        }) => {
          if (detailId == id) {
            {/* setDefaultImg(img); */}
            return (
              <div className="mt-10 w-full">
                <div className="bg-[#eaded7] text-[#b99179] md:text-4xl text-2xl px-2 spa py-10 w-full md:px-40 ">
                  <Link to="/">Home</Link> /<Link to="/products">products</Link>{" "}
                  /<span>{title}</span>
                </div>

                <div className="mt-20 md:px-16 px-8 flex gap-10 w-full md:flex-row flex-wrap justify-center py-10">
                  <div className="img">
                    <img
                      src={selectedImg}
                      className="w-[517px] h-[500px]"
                    />
                    <div className="flex md:flex-row flex-wrap justify-center  md:gap-8 gap-2 mt-5 cursor-pointer ">

                        <img className="w-[100px] h-[80px]" src={Picture[0].img} onClick={imgHandler1} />
                        <img className="w-[100px] h-[80px]" src={Picture[1].img} onClick={imgHandler2} />
                        <img className="w-[100px] h-[80px]" src={Picture[2].img} onClick={imgHandler3} />
                        <img className="w-[100px] h-[80px]" src={Picture[3].img} onClick={imgHandler4} />

                    </div>
                  </div>
                  <div className="w-[650px]">
                    <h1 className="font-bold md:text-4xl text-2xl">{title}</h1>
                    <div className="font-bold md:text-2xl text-xl  mt-3">
                      ${price}
                    </div>
                    <h1 className="md:text-md text-sm leading-7 mt-2">
                      {summary}
                    </h1>
                    <div className="flex flex-col gap-4 mt-5">
                      <div className="flex flex-row  gap-10">
                        <div className="font-bold">Available:</div>
                        <div>{available}</div>
                      </div>
                      <div className="flex flex-row  gap-10">
                        <div className="font-bold">Sku:</div>
                        <div>{sku}</div>
                      </div>
                      <div className="flex flex-row  gap-10">
                        <div className="font-bold">Brand:</div>
                        <div>{brand}</div>
                      </div>
                      <hr />
                    </div>
                    <div className="mt-10 flex flex-row gap-5 items-center">
                      <span>Colors:</span>
                      <div className="flex flex-row gap-2">
                        {colors.map((color, i) => (
                          <span
                            key={i}
                            className={` w-7 h-7 rounded-full`}
                            style={{ backgroundColor: `${color}` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-8 mt-3 mb-5 font-bold text-3xl">
                        <button onClick={() => handleDecrease(id)}>-</button>
                        <button>{qty}</button>
                        <button onClick={() => addQty(id)}>+</button>
                      </div>

                      <div>
                        <button
                          // onClick={() => goTo(`/cart`)}
                          onClick={() =>
                            handleAddToCart({
                              id,
                              summary,
                              qty,
                              price,
                              title,
                              img,
                            })
                          }
                          className="bg-[#A0522D] px-6 py-3 text-white cursor-pointer rounded-md"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      )}
    </>
  );
};

export default Detail;
