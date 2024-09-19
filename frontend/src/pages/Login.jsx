import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
   
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(formData)
    let isvalid = true;
    let validationErrors = {}
    if(formData.username === "" || formData.username === null) {
      isvalid = false;
      validationErrors.username = "Username is required"
    }
   
    // Password Validation
    if(formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password is required"
    } else if(formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password length must be at least 6 char"
    } 

    
    axios.get('http://localhost:8000/users')
    .then(result => {
      result.data.map(user => {
        if(user.username === formData.username) {
          if(user.password === formData.password){
            alert("Login Successfully"+ user.id )
            navigate('/RecipeList')
            console.log(user)
            onLogin(user.id)
          } else {
            isvalid = false;
            validationErrors.password = "Wrong Password; "
          }
        } 
      })
      setErrors(validationErrors)
      setValid(isvalid)

      // alert("Registered Successfully")
      // navigate('/Login')
    })
    .catch(err => console.log(err))
    
  }
  return (
<>
<div className="flex items-center justify-center h-screen bg-whitesmoke m-6">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#006D5B]">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back!</h1>
      <p className="text-gray-600 mb-8 text-center">Login Using Your UserName and Password</p>
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
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
        </div>
        <button 
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[white] hover:text-[#006D5B] hover:border border-[#006D5B] duration-300 
           w-full py-2 mt-4 bg-[#006D5B] text-whitesmoke font-semibold rounded"
        >
          Login
        </button>

        <p className="mt-4">Dont have an Account? <NavLink to={'/Register'}><span className="text-teal-900 text-xl hover:text-3xl">Register</span></NavLink></p>
        </form>
      </div>
    </div>
  
</>
      
  )
};

export default Login;
