const express = require('express');
const connectDB = require('./db.js');
const dotenv = require('dotenv');
const app = express();

// Connect to MongoDB
dotenv.config({
    path:".env"
});

connectDB();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

