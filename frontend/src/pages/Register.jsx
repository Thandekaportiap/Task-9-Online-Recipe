import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    confirmpassword: ''
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true)

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(formData)
    let isvalid = true;
    let validationErrors = {}
    if(formData.username === "" || formData.username === null) {
      isvalid = false;
      validationErrors.username = "Username is required"
    }
    if(formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.username = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid"
    } 
  }


  return (
    <div className="flex items-center justify-center h-screen bg-whitesmoke">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#006D5B] lg:w-96 ssm:w-64"> 
        <h2 className="text-2xl font-semibold mb-6 text-center">Register Page</h2>
        <p className="text-gray-600 mb-8 text-center">Create your new account </p>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
          <FaRegUser size={25} color="#006D5B" className="mr-2"/>
            <input 
              type="text" 
              id="username" 
              className="w-full py-2 outline-none" 
              onChange={(event) => setFormData({...formData, username: event.target.value})}
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
          <MdOutlineAttachEmail size={25} color="#006D5B" className="mr-2"/>
            <input 
              type="email" 
              id="email" 
              className="w-full py-2 outline-none" 
              onChange={(event) => setFormData({...formData, email: event.target.value})}
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
            <RiLockPasswordLine size={25} color="#006D5B" className="mr-2"/>
            <input 
              type="password" 
              id="password" 
              className="w-full py-2 outline-none" 
              onChange={(event) => setFormData({...formData, password: event.target.value})}
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
          <div className="flex items-center border-b-2 border-[#006D5B]">
            <RiLockPasswordLine size={25} color="#006D5B" className="mr-2"/>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full py-2 outline-none"
              onChange={(event) => setFormData({...formData, confirmpassword: event.target.value})} 
              style={{ borderColor: '#006D5B' }} 
            />
          </div>
        </div>
        <button 
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#006D5B] hover:border border-[#006D5B] duration-300
          w-full py-2 mt-4 bg-[#006D5B] text-whitesmoke font-semibold rounded"
        >
          Register
        </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;