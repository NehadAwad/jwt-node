const express = require('express')
const router = express.Router()
const testC = require('../controllers/test')


router.route('/test1').get(testC)