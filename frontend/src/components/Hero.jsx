import React from 'react';
import { FaSearchPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div 
        className="bg-cover bg-no-repeat" 
        style={{ backgroundImage: `url(${require("../assets/cook.jpg")})`, height: "70vh" }}
      >
        <h1 
          className="flex justify-center items-center text-center font-extrabold text-[#006D5B] 
                     p-4 lg:text-6xl md:text-5xl sm:text-3xl xs:text-2xl"
        >
          Simple Recipes For <br /> Incredible Deliciousness
        </h1>

        <div className="flex flex-col justify-center items-center mt-8 px-4">
          <h3 
            className="font-bold text-center text-[#006D5B] 
                       lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl mb-4"
          >
            Explore our Delicious Recipes
          </h3>

          <div className="flex items-center justify-center w-full mt-4">
          <div className="relative w-full max-w-md mx-auto mt-4 sm:mt-6">
  <input
    type="text"
    name="search"
    placeholder="Search"
    className="pl-10 py-2 w-full border rounded-2xl 
               outline-dotted outline-2 outline-offset-2 outline-teal-700 text-sm"
  />
  <FaSearchPlus
    size={20}
    color="#006D5B"
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
