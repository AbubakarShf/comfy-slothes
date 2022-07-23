import React from "react";

const Section = () => {
  return (
    <>
      <div className="bg-[#decbc0] py-20 w-full">
        <div className="flex md:flex-row flex-col text-center items-center px-2  w-full justify-between -mt-10  text-md md:px-20">
          <div>
            <p className="md:text-xl text-xl font-bold text-[#5f4435]">
              Custom Furniture Built Only For You
            </p>
          </div>
          <div className=" px-10">
            <p className=" text-[#5f4435] py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row px-8 gap-6 md:px-10 justify-center mt-10 flex-col items-center">
          <div className="bg-[#b99179] max-w-sm p-10 rounded-md ">
            <div>
              <img />
            </div>
            <div className="flex flex-col justify-center items-center py-3">
              <h1>vision</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </div>

          <div className="bg-[#b99179] max-w-sm p-10 rounded-md ">
            <div>
              <img />
            </div>
            <div className="flex flex-col justify-center items-center py-3">
              <h1>vision</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </div>
          <div className="bg-[#b99179] max-w-sm p-10 rounded-md  ">
            <div>
              <img />
            </div>
            <div className="flex flex-col justify-center items-center py-3">
              <h1>History</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
