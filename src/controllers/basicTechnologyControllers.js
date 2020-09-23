const bTech = require('../models/basic_tech')
require('dotenv').config() 

exports.setBasicTechnologyQuestion = (async(request , response)=>{
    let {Question , category , choice ,level ,answer } = request.body

    let newBasicT = new bTech({
        Question ,category ,choice,level,answer
    })
    let data = await newBasicT.save()
    return response.status(200).json({
        response: 'Successful',
        results : data
    })

})

exports.getBasicTechnologyQuestion = (async(request,response)=>{
    let result = await bTech.find()
    return response.status(200).json({
        response:'Successful',
        output: result
    })
})