const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Use middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

// MongoDB connection (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/formDataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Define a Schema for the form data
const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNumber: String,
  adharNumber: String,
});

// Create a model for the form data
const FormData = mongoose.model('FormData', formDataSchema);

// POST route to save form data to MongoDB
app.post('/api/submit-form', (req, res) => {
  const { firstName, lastName, contactNumber, adharNumber } = req.body;

  const formData = new FormData({
    firstName,
    lastName,
    contactNumber,
    adharNumber,
  });

  formData.save()
    .then(() => res.status(201).json({ message: 'Form data saved successfully' }))
    .catch((err) => res.status(400).json({ message: 'Error saving data', error: err }));
});

// Define a GET route to fetch specific form data by ID
app.get('/api/get-form-data/:id', (req, res) => {
    const { id } = req.params;
  
    FormData.findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: 'Form data not found' });
        }
        res.status(200).json(data); // Send the specific data as a response
      })
      .catch((err) => {
        res.status(400).json({ message: 'Error fetching data', error: err });
      });
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
