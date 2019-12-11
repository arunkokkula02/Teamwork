const db = require('../dbconnect');
const bcrypt = require('bcrypt');
//Function for creating user to the database
exports.createUser = (req, res) => {
  const {firstname,lastname, email,gender,role,department,address,password,admin } = req.body
  bcrypt.hash(password,10).
  then((hash) =>db.query('INSERT INTO users ( firstname,lastname,email,gender,role,department,address,password,admin) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9)', [ firstname,lastname,email,gender,role,department,address,hash,admin]).
  then( () => {res.status(201).json({message: 'User added successfully!' });}).
  catch( (error) => res.status(500).json({error: error })))
  
}

//Function to view all users on the database
exports.getUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

