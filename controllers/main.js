
const bodyParser = require('body-parser');
const express = require('express');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const login = async (req, res) => {
    const { username } = req.body.username
    console.log(username)
    res.send('username')
}

const dashboard = async (req, res) => {
    const {test} = req.body
    console.log(test)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, Jhon Doe`, secret: `lucky number ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}