
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Login');
    console.log("Login button clicked");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500"
    >
      <g id="freepik--background-simple--inject-3">
        <path d="M55.48,273.73s2.32,72,62.43,120,143.41,51.43,210.84,56,119.23-33.62,127-91.32-43.72-74.64-71.68-140.33S358.64,130.8,299.49,90.4,147.8,74.81,99.29,144,55.48,273.73,55.48,273.73Z" style={{ fill: '#3B82F6' }} />
        <path d="M55.48,273.73s2.32,72,62.43,120,143.41,51.43,210.84,56,119.23-33.62,127-91.32-43.72-74.64-71.68-140.33S358.64,130.8,299.49,90.4,147.8,74.81,99.29,144,55.48,273.73,55.48,273.73Z" style={{ fill: '#fff', opacity: 0.7 }} />
      </g>
      <g id="freepik--Padlock--inject-3">
        <path d="M83.61,179.69V153.92c0-18.24,15.16-33.08,33.79-33.08s33.79,14.84,33.79,33.08v25.77h13.47V153.92c0-25.51-21.2-46.27-47.26-46.27s-47.26,20.76-47.26,46.27v25.77Z" style={{ fill: 'none', stroke: '#263238', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.166' }} />
        <rect x="65.14" y="179.87" width="103.18" height="85.35" style={{ fill: 'none', stroke: '#263238', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.166' }} />
        <path d="M127.46,215.32a11.24,11.24,0,0,0-22.47,0,11,11,0,0,0,5.9,9.68L109,244.38h14.45L121.56,225A11,11,0,0,0,127.46,215.32Z" style={{ fill: 'none', stroke: '#263238', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.166' }} />
      </g>
    </svg>
    <h1 className="text-2xl font-bold text-center">Unauthorized</h1>
      <p className="text-center">You do not have access to this page.</p>
      
      <button className='border border-[#006D5B] text-[#006D5B]  py-2  hover:bg-[#006D5B] hover:text-white px-4 font-bold rounded-md'>Login</button>
  </div>
);
};
  


export default Unauthorized