const mongoose = require("mongoose")

const schema = mongoose.Schema

const telemetrySchema = new Schema({
    temp: {
        type: String
    },
    humidity: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    }
})

/**
 * create the model for "Telemetry" collection and export it 
 */
module.exports = mongoose.model("Telemetry",telemetrySchema)