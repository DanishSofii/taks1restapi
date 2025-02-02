const mongoose = require("mongoose")

//Device Schema 
const deviceSchema = new mongoose.Schema({
    // unique id of each device
    deviceId:{
        type:Number,
        required:true,
        unique: true
    },
    // name of the device and should be unique
    name:{
        type: String,
        required: true
    },
    // category such as light, AC, etc
    type:{
        type: String,
        required: true,
    },
    // each type of device can have multiple models -- each model has diff model name
    model:{
        type: String,
        required: true,
        unique: true
    },
    // power usuage by the device in watts (can be used to track eneryg consumption)
    powerConsumption: {
        type: Number,
        required: true
    },
    // the operating voltage of the device
    voltage:{
        type: Number,
        required: true
    },
    warranty:{
        type: Number,
        default: 12
    }
})

// model

const Device = mongoose.model("device",deviceSchema)

module.exports = Device;