//const { Response, ResponseError } = require("../utils/response");
const Basic = require("../models/basic");
require("dotenv").config();

exports.setEasyBasicScienceQuestion = async (request,response,next) => {
  let { setQuestion, category, choice, level, answers } = request.body;
  let newBasic = new Basic({
    setQuestion,
    category,
    choice,
    level,
    answers,
  });
  let displayResult = await newBasic.save();
  console.log(displayResult)
  return response.status(200).json( {
    status: "Succesful",
    output: displayResult,
  });
};


exports.getAllEasyBasicScienceQuestions = async(request,response,next)=>{
    let allResults = await Basic.find({}).limit(4)
    console.log(allResults)
    return response.status(200).json({
        
        status:"Successful",
     
        results:allResults
    })
}

exports.getRandomResults = async(request,response,next)=>{
    let randomResults = await Basic.aggregate([{$sample:{size:4}}])
    return response.status(200).json({
        status:"Successful",
        results:randomResults
    })
}