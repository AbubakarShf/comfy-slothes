import React from "react";

const Email = () => {
  return (
    <>
      <div className="mt-16 w-full px-4  space-y-16 p-2 flex md:flex-row  flex-wrap justify-between  md:px-16 items-center ">
        <div className="flex flex-col leading-8 text-center ">
          <p className="font-bold text-2xl">
            Join our newsletter and get 20% off
          </p>
          <p className="md:w-[640px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <div className="flex md:flex-row py-1 mx-auto  flex-col items-center">
          <input
            type="email"
            className="border-2 px-2 py-2 md:w-[310px] w-[250px] "
            placeholder="Enter Email"
          />
          <div>
            <button className="bg-[#b99179]  text-white py-2 px-12">
              SubScribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
