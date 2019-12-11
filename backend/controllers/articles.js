const db = require('../dbconnect');

//Function for creating a new article to the database
exports.createArticle = (req, res) => {
  const {title,article,user_id} = req.body
  const created_on =  new Date()
  db.query('INSERT INTO articles (title,article,created_on,user_id) VALUES ($1, $2, $3, $4)', [title,article,created_on,user_id]).
  then( () => {res.status(201).json({message: 'Article created successfully!' });}).
  catch( (error) => res.status(500).json({error: error }))
  
}

//Function to view articles created on the database
exports.getArticles= (request, response) => {
    db.query('SELECT * FROM articles ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


//Function for editing an existing or specific article

