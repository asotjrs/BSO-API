const Post =require("../models/Post")
//import Post from "../models/Post";



export const getUsers = async (req, res) => {

    try{
    const posts = await Post.find();
    console.log("yesssss here are ",posts)
    res.send(users);
    }catch(err){

        res.send(err, " error fetching from db")
    }


    console.log(`Users in the database: ${users}`);

    res.send(users);
}