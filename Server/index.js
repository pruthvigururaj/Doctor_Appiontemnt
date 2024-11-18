require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const AppointmentModel=require("./models/Appointment");
const Appointment = require("./models/Appointment");

const app=express();
app.use(express.json());
app.use(cors());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }));

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("connected to mongodb"))
.catch(err=>console.log("rorrr",err))

app.post("/register",(req,res)=>{
    
    AppointmentModel.create(req.body)
    .then(result=>{
        console.log("Data inserted:", result);
        console.log("Current Database:", mongoose.connection.name);
        res.json(result)
    })
    .catch(err=>res.json(err));
})

app.get("/appointments",(req,res)=>{
    Appointment.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("server is running");
})

