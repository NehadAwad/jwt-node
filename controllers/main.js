
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')



const bodyParser = require('body-parser');
const express = require('express');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const login = async (req, res) => {
    const { username } = req.query
    console.log(username)
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
      }
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