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
// GET a single bus route by ID
// GET route with full details: bus, driver, attender, and stops
app.get('/api/routes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // 1. Get route and vehicle info
    const routeQuery = await pool.query(`
      SELECT 
        r.id, r.route_name, r.bus_id,
        v.number_plate,
        d.name AS driver_name,
        a.name AS attender_name
      FROM bus_routes r
      LEFT JOIN vehicles v ON r.bus_id = v.id
      LEFT JOIN users d ON v.driver_id = d.id
      LEFT JOIN users a ON v.attendant_id = a.id
      WHERE r.id = $1
    `, [id]);

    if (routeQuery.rows.length === 0) {
      return res.status(404).json({ message: 'Route not found' });
    }

    const route = routeQuery.rows[0];

    // 2. Get bus stops for the route
    const stopsQuery = await pool.query(`
      SELECT id, name, latitude, longitude, sequence
      FROM bus_stops
      WHERE route_id = $1
      ORDER BY sequence ASC
    `, [id]);

    // 3. Attach stops to route
    route.stops = stopsQuery.rows;

    // 4. Send final object
    res.json(route);

  } catch (err) {
    console.error('Error fetching full route info:', err);
    res.status(500).json({ message: 'Error retrieving route details' });
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
app.get('/api/vehicles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`
      SELECT v.*, d.name AS driver_name, a.name AS attender_name
      FROM vehicles v
      LEFT JOIN users d ON v.driver_id = d.id
      LEFT JOIN users a ON v.attendant_id = a.id
      WHERE v.id = $1
    `, [id]);

    if (result.rows.length === 0) return res.status(404).json({ message: 'Vehicle not found' });

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching vehicle:', err);
    res.status(500).json({ message: 'Error retrieving vehicle' });
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
app.get('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`
      SELECT s.*, u.name AS guardian_name
      FROM students s
      LEFT JOIN users u ON s.guardian_id = u.id
      WHERE s.id = $1
    `, [id]);

    if (result.rows.length === 0) return res.status(404).json({ message: 'Student not found' });

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching student:', err);
    res.status(500).json({ message: 'Error retrieving student' });
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

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Error retrieving user' });
  }
});


// Start server
app.listen(5000, () => {
  console.log('🚀 Backend server running at http://localhost:5000');
});
