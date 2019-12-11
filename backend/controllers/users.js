const db = require('../dbconnect');
const Helper = require('../middileware/Helper')
const bcrypt = require('bcrypt');



//Function for creating user to the database
exports.createUser = async(req, res) => {
  const {firstname,lastname, email,gender,role,department,address,password,admin } = req.body
  if(!email || !password){
    return res.status(400).json({'message': 'Some values are missing'});
   }
   //check if email is valid
   if (!Helper.isValidEmail(email)) {
    return res.status(400).json({ 'message': 'Please enter a valid email address' });
  }
  //hash the password from the user request
  const hashpassword = Helper.hashpassword(password,10)
  const text = 'INSERT INTO users ( firstname,lastname,email,gender,role,department,address,password,admin) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9)'
  const values = [ firstname,lastname,email,gender,role,department,address,hashpassword,admin]
  try{
    //insert in the database
    await db.query(text,values)
    return res.status(201).json("Status:sucessfully created user")
   }
  catch(error){
    //return error if the requst is not successful
    return res.status(400).json(error);
  }  
  
}
//Function for user login
exports.userLogin = async(req,res) =>{
  const {email, password} = req.body
  if (!email || !password) {
    return res.status(400).json({'message': 'Some values are missing'});
  }
  //Check if email is valid
  if (!Helper.isValidEmail(email)) {
    return res.status(400).json({ 'message': 'Please enter a valid email address' });
  }
  //Check if the correct credentials have been entered
  const text = 'SELECT * FROM users WHERE email = $1';
  try{
    const { rows } = await db.query(text, [email]);
    if(!rows[0]){
      return res.status(400).json({'message': 'The email you entered does not exist'});
    }
    //check if the password entered is correct
    if(!Helper.comparePassword(rows[0].password, password)) {
      return res.status(400).send({ 'message': 'The password you have eneted is incorrect' });
    }
    //Generate the token for the user
    const token = Helper.generateToken(rows[0].id);
      return res.status(200).send({ token });
  }catch(error){
    return res.status(400).json(error)
  }
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

