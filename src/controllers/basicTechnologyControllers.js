const bTech = require('../models/basic_tech')
require('dotenv').config() 

exports.setBasicTechnologyQuestion = (async(request , response)=>{
    let {setQuestion , category , choice ,level ,answers } = request.body

    let newBasicT = new bTech({
        setQuestion ,category ,choice,level,answers
    })
    let data = await newBasicT.save()
    console.log(data)
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