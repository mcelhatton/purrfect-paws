const mongoose = require('mongoose');

const { Schema } = mongoose;
const Pet = require('../models/Pet');

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    minlength: 7
  },
  pets: [Pet.schema]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
