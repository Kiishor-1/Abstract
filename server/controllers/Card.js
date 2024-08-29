const Card = require('../models/Card');

exports.allCards = async(req,res)=>{
    try{
        const cards = await Card.find({});
        res.status(200).json({success:true,data:cards});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}
exports.specificCard = async(req,res)=>{
    try{
        const {title} = req.params || req.query;
        const card = await Card.findOne({title:title});
        res.status(200).json({success:true,data:card});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.createCard = async(req, res)=>{
    try{
        const {title, description}=req.body;
        const card = await Card.create({title, description});
        console.log("Created card",card);
        res.status(201).json({success:true,data:card});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}