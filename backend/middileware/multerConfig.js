const multer = require('multer');

//multer.diskStorage() creates a storage space for storing files. 
const storage = multer.diskStorage({
    destination:function(req, file,cb){
        if(file.mimetype === 'image/gif'){
            cb(null, 'images');
        }else{
            cb({message: 'The file uploaded is not a gif'}, false)
        }
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
module.exports = multer({storage: storage}).single('image');