const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema and Model for Contact Form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: Number // Assuming 'phone' is a number field
});

const Contact = mongoose.model('Contact', contactSchema);

// Endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;
    
    const newContact = new Contact({ name, email, message, phone });
    await newContact.save();
    
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
