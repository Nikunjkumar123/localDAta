const Location = require('../model/loc.model.js');

const addDelhiLocation = async (req, res) => {
  try {
    const { state, districts } = req.body;

    if (!state || !districts || districts.length === 0) {
      return res.status(400).json({ message: 'State and districts are required' });
    }

    const newLocation = new Location({
      state,
      districts
    });

    await newLocation.save();

    res.status(201).json({
      message: 'Location added successfully',
      location: newLocation
    });
  } catch (error) {
    console.error('Error adding location:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const getDelhiLocation = async (req, res) => {
  try {
    const locations = await Location.find(); 

    if (!locations || locations.length === 0) {
      return res.status(404).json({ message: 'No locations found' });
    }

    res.status(200).json({
      message: 'Locations retrieved successfully',
      locations
    });
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { addDelhiLocation, getDelhiLocation };
