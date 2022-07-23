import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <div className="bg-[#eaded7] text-[#b99179] md:text-4xl text-2xl px-10 py-10 w-full md:px-40 ">
          <Link to="/">Home</Link> / <span>About</span>
        </div>
        <div className="mt-16 w-full flex  md:flex-row px-8  justify-center flex-wrap gap-20  ">
          <div>
            <img
              src={require("../Img/About.jpg")}
              className="w-[530px]  h-[545px] "
            />
          </div>
          <div className="flex flex-col px-2 md:w-[490px]">
            <h1 className="md:text-4xl text-2xl font-bold mt-1 mb-7">
              Our Story
            </h1>
            <p className="text-md leading-8 text-md text-sm md:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
