const mongoose = require("mongoose")

const { Schema } = mongoose

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet
