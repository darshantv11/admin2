const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// All API routes below...

// GET all bus routes
app.get('/api/routes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bus_routes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching routes');
  }
});

// GET all vehicles
app.get('/api/vehicles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicles');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching vehicles');
  }
});

// GET all students
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching students');
  }
});

// GET users by role
app.get('/api/users', async (req, res) => {
  const { role } = req.query;
  try {
    const result = await pool.query(
      'SELECT id, name, email, phone FROM users WHERE role = $1',
      [role]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});

// Start server
app.listen(5000, () => {
  console.log('🚀 Backend server running at http://localhost:5000');
});
