const Computer = require('../models/computer')
require('dotenv').config()


exports.setEasyComputerQuestions = async(request,reponse,next)=>{
    let{setQuestion,category,choice,level,answers} = request.body
    
    let newComputerQuestions = new Computer({
        setQuestion,category,choice,level,answers
    }) 

    let displayResults = await  newComputerQuestions.save()
    return reponse.status(200).json({
        status:'Successful',
        output:displayResults
    })


}

exports.getEasyComputerQuestions = async(request,response,next) =>{
    let results = await Computer.find({})
    return response.status(200).json({
        status:'Sucessful',
        output:results
        
    })
}