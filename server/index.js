const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // This is a package that loads environment variables from a .env file into process.env


//Middlewares
app.use(cors()); // This is a middleware that allows for cross-origin resource sharing
app.use(express.json()); // This is a middleware that allows for the parsing of JSON
app.use(express.urlencoded({ extended: true })); // This is a middleware that allows for the parsing of URL-encoded data

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});

