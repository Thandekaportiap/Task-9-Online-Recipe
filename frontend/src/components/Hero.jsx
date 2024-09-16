
import React from 'react'
import { FaSearchPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <div  className='bg-cover bg-no-repeat '
     style={{backgroundImage:`url(${require("../assets/cook.jpg")})`,
    width:"100%",height:"70vh"}}
   >
        <h1 className='head text-6xl font-extrabold text-[#006D5B] text-center p-9'>Simple Recipes For <br/> Incredible Deliciousness</h1>

        <div className='flex flex-col justify-center items-center mt-10'>
            <h3 className='text-4xl font-bold'>Explore our Delicious Recipes</h3>

            <div className="flex items-center mb-4">
    <div className="relative">
        <input 
            type="text" 
            name="search" 
            placeholder="Search" 
            className="pl-10 py-2 border rounded outline-dotted outline-2 outline-offset-2 outline-cyan-500" 
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
