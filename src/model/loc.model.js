const mongoose = require('mongoose');

// Location Schema
const locationSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  districts: [
    {
      district: {
        type: String,
        required: true
      },
      localities: [
        {
          type: String,
          required: true
        }
      ]
    }
  ]
});

// Create the Location model
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
