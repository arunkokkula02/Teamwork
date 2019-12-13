const db = require('../dbconnect');;
const cloud = require('../middileware/cloudinaryConfig');

//Function for craeting a gif
exports.createGif = (req, res) => {
    try{
        const image = req.file.path
        //If there is no error,upload image
        cloud.uploads(image).then((result) => {
            
            const filename = req.body.filename
            const imageUrl =  result.url
            const created_on = new Date()
            const user_id = req.user.id
            const text = 'INSERT INTO gifs (title,image,created_on,user_id) VALUES ($1, $2, $3, $4)'
            const values = [filename, imageUrl,created_on,user_id]
            //Insert image details to the database
            db.query(text,values ,(err, results)=> {
                if(err){
                    
                    res.json({err: err,message: 'could not upload image, try again'})
                 }else {
                     res.json({ message: "image uploaded successfully!!" })
                    }
                })
            })
        }
        catch(error){
            console.log(req.file.path)
            console.log(req.body.filename)
            console.log(error)
        }
    }

//Function to view gifs posted the database
exports.getGifs= (req, res) => {
    db.query('SELECT * FROM gifs ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }