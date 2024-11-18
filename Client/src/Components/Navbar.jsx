import React from "react";
import { Link,useLocation } from "react-router-dom";

function Navbar(){
    const location=useLocation();
    return(
        <div className="flex flex-row  bg-sky-50  h-20">
           <div className="flex flex-row items-center sm:pl-20 w-1/2 pl-4">
                 <img src="logo.jpg" alt="logo" className="w-14 h-14 "/> 
                 <h1 className="text-2xl font-bold ml-1">Health Hospital</h1>
           </div>
           
           {/* <div className="w-1/2 h-full">
         
           <button className="sm:hidden text-3xl  w-full h-full text-right pr-5">
                ☰
            </button>
                <ul className="hidden  sm:flex flex-row items-center justify-center h-full gap-6 text-lg ">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">About</li>
                    <li className="cursor-pointer hover:text-blue-600">Contact</li>
                    <li className="cursor-pointer hover:text-blue-600">Review</li>
                </ul>
           </div> */}
           <div className="w-1/2 h-full  flex justify-center items-center">
           {location.pathname==='/confirmation'?(
            <Link to="/">
                <button className="py-3 px-5  bg-blue-500 text-white rounded-md sm:py-3 sm:px-10">Book Appoinment</button>
            </Link>
           ):(
            <Link to="/confirmation">
                <button className="py-3 px-5  bg-blue-500 text-white rounded-md sm:py-3 sm:px-10">View Appiontments</button>
            </Link>
           )}
           </div>
          
           
        </div>
    )
}
export default Navbar;