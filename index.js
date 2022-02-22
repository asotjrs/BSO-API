import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


mongoose.connect("mongodb+srv://admin:admin@cluster0.aqmhx.mongodb.net/Properties?retryWrites=true&w=majority",{useNewUrlParser:true},()=>{
    console.log("connected !!!!!")
})



import usersRoutes from "./routes/users.js";



const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/properties", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
