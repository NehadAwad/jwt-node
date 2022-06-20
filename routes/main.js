const express = require('express')
const router = express.Router()

const { login, dashboard, akashC } = require('../controllers/main')
const authMiddleware = require('../middleware/auth')


router.route('/dashboard').get(dashboard)
router.route('/login').post(login)
router.route('/akash').get(akashC)

module.exports = router
