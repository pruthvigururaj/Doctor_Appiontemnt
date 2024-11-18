import React,{useState,useEffect}from "react";
import axios from "axios";

function Confirmation()
{
    const [appointments, setAppointments]=useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/appointments`)
        .then(result=>setAppointments(result.data))
        .catch(err=>console.log(err))
    },[]);
    return(
        <div className="bg-customPink   min-h-screen ">
           <h1 className="sm:text-center py-4 text-white sm:text-5xl pl-4 text-4xl">All Appointments</h1>
           
           {Array.isArray(appointments) && appointments.length > 0 ? (
  <div className="flex flex-wrap gap-6 justify-center mt-6">
    {appointments.map((appt) => (
      <div
        key={appt._id}
        className="w-[300px] bg-sky-50  rounded-lg shadow-lg p-4 flex flex-col justify-between"
      >
        <h1 className="text-lg font-bold">Name: {appt.name}</h1>
        <h1 className="text-md">Date: {new Date(appt.date).toLocaleDateString()}</h1>
        <h1 className="text-md">Status: {appt.status}</h1>
      </div>
    ))}
  </div>
) : (
  <p className="sm:text-center py-4 text-white sm:text-5xl pl-4 text-4xl">No appointments found.</p>
)}
        </div>
    )
}
export default Confirmation;