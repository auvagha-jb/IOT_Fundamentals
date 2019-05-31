const mongoose = require("mongoose")

const schema = mongoose.Schema

const deviceSchema = new Schema({
    name: {
        type: String
    },
    longitude: {
        type: String
    },
    latitude: {
        type: String
    }
})

/**
 * create the model for "Device" collection and export it 
 */
module.exports = mongoose.model("Device",deviceSchema)