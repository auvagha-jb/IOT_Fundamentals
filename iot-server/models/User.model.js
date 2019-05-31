const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone_number: {
        type: Number
    },
    email: {
        type: String
    }
})

/**
 * create the model for "User" collection and export it 
 */
module.exports = mongoose.model("User",userSchema)