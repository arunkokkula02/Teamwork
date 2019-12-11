
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken');

 //Hash password
  const hashpassword =(password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }
  // Check if the email is valid
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

 //compare password
  const comparePassword =(hashPassword, password) => {
    return bcrypt.compareSync(password, hashPassword);
  }
  
 // Generate token
  const generateToken = (id) => {
    const token = jwt.sign({
      userId: id
    },
      process.env.SECRET, { expiresIn: '7d' }
    );
    return token;
  }

module.exports = {
    hashpassword,
    isValidEmail,
    comparePassword,
    generateToken
}