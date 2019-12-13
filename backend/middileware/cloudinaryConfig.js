const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();
//configuration
cloudinary.config({
configString:process.env.CLOUDINARY_URL
});

//Function to upload images and return response if successful
exports.uploads = (file) => {
    
  return cloudinary.uploader.upload(file, (error,result) =>{
     return result
    })
  
}

/*
//Function to upload images and return response if successful
exports.uploads = (file) => {
    return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) =>{
    resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
    })
    }
*/