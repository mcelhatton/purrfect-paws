const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 60
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
