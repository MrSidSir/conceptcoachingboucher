require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Enrollment Schema
const enrollSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  date: { type: Date, default: Date.now },
});
const Enroll = mongoose.model('Enroll', enrollSchema);

// Routes
app.post('/api/enroll', async (req, res) => {
  try {
    const { name, email, course } = req.body;
    const enroll = new Enroll({ name, email, course });
    await enroll.save();
    res.status(201).json(enroll);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/enroll', async (req, res) => {
  try {
    const enrollments = await Enroll.find();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 