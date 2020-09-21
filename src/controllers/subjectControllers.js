
const parser = require('../helperFunction/cloud')
const Subject = require('../models/subject')
require('dotenv').config()

exports.createSubject = async(parser().single('image') , (request , response) =>{
    let value = {...request.body , image: request.file.path}

    let newSubject = new Subject({
        subject_title: value.subject_title,
        image:value.image
    })

    let data = await newSubject.save()
    return status(200).json({
        response:'Successful',
        data
    })
})