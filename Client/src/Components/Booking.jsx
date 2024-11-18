
import React ,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking()
{
    const apiUrl = process.env.REACT_APP_API_URL;
    const [name, setName]=useState("");
    const [date,setDate]=useState("");
    const navigate = useNavigate();

    const handelsubmit=(e)=>{
        e.preventDefault();
        
        axios.post(`${apiUrl}/register`,{name,date})
        .then(result=>{
           console.log(result);
           alert(`Booking Confirmed on ${date}`);
        })
        .catch(err=>{
          console.log(err);
        })
        setName("");
        setDate("");
    }


  

    return(
        <div className="bg-customPink lg:py-40 py-10 flex lg:flex-row flex-col min-h-screen "> 
             <div className="lg:w-1/2  sm:pl-20 pl-4 w-full">
               <h1 className="text-gray-200 text-2xl font-bold mb-8">Your Health Matters to Us</h1>   
               <h1 className="text-white sm:text-6xl text-4xl">Get Brighter Smile from India's Best Doctors</h1>
             </div> 
             <div className="lg:w-1/2 w-full  mt-6 sm:pl-20 pl-4 pr-4 ">
             <div className="bg-sky-50 sm:w-2/3 w-full rounded-md pt-2">
             <h1 className="text-center font-bold text-xl mb-3">Book an Appointment</h1>
             <form className="pl-6 pr-2" onSubmit={handelsubmit}>
                    <label for="name" className="text-lg mb-3">Name</label><br />
                    <input type="text" placeholder="Enter your Name" value={name} className="p-2 w-full outline-none border border-gray-200 mb-3" onChange={(e)=>setName(e.target.value)} required></input><br />
                    <label htmlFor="date" className="text-lg mb-3">Please select a Date</label><br />
                    <input type="date" value={date} className="p-2 w-full outline-none border border-gray-200 mb-3" onChange={(e)=>setDate(e.target.value)} required/><br />
                    <button className="px-2 w-full bg-blue-600 text-white mb-3 py-2 rounded-md">Book</button>
                </form>
                </div>
             
             
                
             </div>
        </div>
    )
}
export default Booking;