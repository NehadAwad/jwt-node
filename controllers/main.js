
const jwt = require('jsonwebtoken')
const { BadRequestError, CustomAPIError } = require('../errors')

const bodyParser = require('body-parser');
const express = require('express');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const login = async (req, res) => {
    const { username, password } = req.query
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1]    
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({
        
            secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
        })
    }catch(error){
        throw new CustomAPIError('Not authorised to access this route', 401)
    }
   
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token prodvided', 401)
    }
    
}



module.exports = {
    login, dashboard
}