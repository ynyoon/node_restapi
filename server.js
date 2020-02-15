const express = require('express');
const mongoose = require('mongoose');
const server = express();
require('dotenv').config({ path: 'variables.env' });


server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("connected to database successfully");
                console.log("The server is running");
            }
        });
    }
});