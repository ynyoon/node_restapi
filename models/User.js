const mongoose = require('mongoose');
//const Schema = mongoose.Schema; Object destructuring; javascript에서 이게 아래랑 같음?
const { Schema } = mongoose;

const userSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        name: String,
        age: {
            type: Number,
            min: 18,
            max: 50
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User',userSchema);