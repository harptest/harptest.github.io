const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'form_data',
  password: '0000',
  port: 5432,
});


app.use(cors());
app.use(bodyParser.json());

// Route to handle "Got Questions" form
app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query(
      'INSERT INTO questions_form (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    res.status(200).send({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error inserting form data:', error);
    res.status(500).send({ error: 'Failed to save form data.' });
  }
});

// Route to handle "Partner with Us" form
app.post('/submit-partner-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query(
      'INSERT INTO partner_form (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    res.status(200).send({ message: 'Partner form submitted successfully!' });
  } catch (error) {
    console.error('Error inserting partner form data:', error);
    res.status(500).send({ error: 'Failed to save partner form data.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
