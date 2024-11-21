const express = require('express');
const router = express.Router(); // This is a router object that allows for the creation of routes
const { signup, login } = require('../controllers/auth.js');

router.post('/signup', signup); // This is a route that listens for POST requests to /signup and calls the signup function from the authController
router.post('/login', login); // This is a route that listens for POST requests to /login and calls the login function from the authController


module.exports = router; // This exports the router module