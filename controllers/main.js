
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
    if(!authHeader || !authHeader.startwith('Bearer ')){
        throw new CustomAPIError('No token prodvided', 401)
    }
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
       
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

const akashC = async (req, res) => {
    console.log('ok');
    res.status(200).json({
        msg: `ok`
    })
}

module.exports = {
    login, dashboard, akashC
}