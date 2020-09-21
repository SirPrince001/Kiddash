require('dotenv').config
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const cloudinaryStorage = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
})

const storage = cloudinaryStorage.createCloudinaryStorage({
    cloudinary,
    folder: 'subject_image',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 1000, crop: 'fill' }],
  });
  
  function parser() {
    return multer({ storage });
  }
  
  module.exports = parser;