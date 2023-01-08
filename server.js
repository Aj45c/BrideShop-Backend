const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//----------------------------------------
const app = express();

require('dotenv').config();

//=============================================
const { PORT = 4000, MONGODB_URL} = process.env;

mongoose.connect(MONGODB_URL);

mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))


app.use(cors());
app.use('/', Routes);

app.get('/', (req, res)=> {
    res.send("Hello There - Obi_Wan")
});

app.listen(PORT, () => {
    console.log(`Port: ${PORT} is now active`)
});