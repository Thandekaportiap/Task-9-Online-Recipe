
import React from 'react'
import { FaSearchPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <div  className='bg-cover bg-no-repeat '
     style={{backgroundImage:`url(${require("../assets/cook.jpg")})`,height:"70vh"}}
   >
        <h1 className='head flex justify-center items-center lg:text-6xl sm:text-4xl font-extrabold text-[#006D5B] text-center lg:p-9 ssm:p-7'>Simple Recipes For <br/> Incredible Deliciousness</h1>

        <div className='flex flex-col justify-center items-center mt-12'>
            <h3 className='lg:text-4xl sm:text-4xl font-bold mb-5'>Explore our Delicious Recipes</h3>

            <div className="flex items-center mb-4 mt-7 ">
    <div className="relative w-9/12">
        <input 
            type="text" 
            name="search" 
            placeholder="Search" 
            className="pl-10 py-2 border rounded-2xl outline-dotted outline-2 outline-offset-2 outline-teal-700 " 
        />
        <FaSearchPlus 
            size={20} 
            color="#006D5B" 
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
        />
    
    
      </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero
