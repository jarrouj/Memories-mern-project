import PostMessage from "../models/postMessage.js";



export const getPosts = async (req,res)=>{
   try{
    const postMessage= await PostMessage.find();
    res.status(200).json(postMessage);
   }catch(error){
     res.status(404).json({ message : error.message});
   }

}

export const createPost = (req,res) =>{
    const post=req.body;

    const newPost = new PostMessage(post);
    try{
        newPost.save();
    }catch(error){

    }
}