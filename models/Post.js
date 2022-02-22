const mongoose=require("mongoose");


const PostSchema=mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        title: {
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        avgRating:{
            type:Int,
            required:true

        },
        ratings:{
            type:Int,
            required:true

        },
        price:{
            type:Float,
            required:true

        },
        oldPrice:{
            type:Float,
            required:true

        },
        





    
    }
);

module.exports= mongoose.model("Post",PostSchema)