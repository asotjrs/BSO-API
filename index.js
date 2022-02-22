import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";

import usersRoutes from "./routes/users.js";

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
    console.log("connected !!!!!")
})

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.use("/properties", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
