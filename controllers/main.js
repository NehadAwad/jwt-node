
const jwt = require('jsonwebtoken')
// const { BadRequestError } = require('../errors')



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
    res.send('ok')
}

const dashboard = async (req, res) => {
    const {test} = req.query
    console.log(test)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, Jhon Doe`, secret: `lucky number ${luckyNumber}`, test: test})
}

module.exports = {
    login, dashboard
}