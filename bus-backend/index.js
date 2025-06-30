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

// Update a bus route
app.put('/api/routes/:id', async (req, res) => {
  const { id } = req.params;
  const { route_name, bus_id } = req.body;

  try {
    const result = await pool.query(
      'UPDATE bus_routes SET route_name = $1, bus_id = $2 WHERE id = $3 RETURNING *',
      [route_name, bus_id, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating route:', err);
    res.status(500).json({ message: 'Error updating route' });
  }
});

// Update a vehicle
app.put('/api/vehicles/:id', async (req, res) => {
  const { id } = req.params;
  const { number_plate, make, model, capacity } = req.body;

  try {
    const result = await pool.query(
      `UPDATE vehicles
       SET number_plate = $1, make = $2, model = $3, capacity = $4
       WHERE id = $5
       RETURNING *`,
      [number_plate, make, model, capacity, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating vehicle:', err);
    res.status(500).json({ message: 'Error updating vehicle' });
  }
});
app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, class: className, guardian_id, route_id } = req.body;

  try {
    const result = await pool.query(
      `UPDATE students SET name = $1, class = $2, guardian_id = $3, route_id = $4 WHERE id = $5 RETURNING *`,
      [name, className, guardian_id, route_id, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating student:', err);
    res.status(500).json({ message: 'Error updating student' });
  }
});
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *`,
      [name, email, phone, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Error updating user' });
  }
});
app.delete('/api/routes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM bus_routes WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.json({ message: 'Route deleted successfully' });
  } catch (err) {
    console.error('Error deleting route:', err);
    res.status(500).json({ message: 'Error deleting route' });
  }
});
app.delete('/api/vehicles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM vehicles WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Vehicle not found' });
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    console.error('Error deleting vehicle:', err);
    res.status(500).json({ message: 'Error deleting vehicle' });
  }
});
app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error('Error deleting student:', err);
    res.status(500).json({ message: 'Error deleting student' });
  }
});
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

app.post('/api/vehicles', async (req, res) => {
  const { number_plate, make, model, capacity, driver_id, attender_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO vehicles (number_plate, make, model, capacity, driver_id, attendant_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        number_plate,
        make,
        model,
        capacity ? parseInt(capacity) : null,
        driver_id || null,
        attender_id || null
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting vehicle:', err);
    res.status(500).json({ message: 'Failed to add vehicle' });
  }
});


// POST - Add a new route
app.post('/api/routes', async (req, res) => {
  const { route_name, bus_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO bus_routes (route_name, bus_id)
       VALUES ($1, $2)
       RETURNING *`,
      [route_name, bus_id || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting route:', err);
    res.status(500).json({ message: 'Failed to add route' });
  }
});

// POST - Add a new stop to a route
app.post('/api/stops', async (req, res) => {
  const { route_id, name, latitude, longitude, sequence } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO bus_stops (route_id, name, latitude, longitude, sequence)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [route_id, name, latitude, longitude, sequence]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Error adding stop:', err);
    res.status(500).json({ message: 'Failed to add stop' });
  }
});
app.put('/api/stops/:id', async (req, res) => {
  const { id } = req.params;
  const { name, latitude, longitude, sequence } = req.body;

  try {
    const result = await pool.query(
      `UPDATE bus_stops
       SET name = $1, latitude = $2, longitude = $3, sequence = $4
       WHERE id = $5
       RETURNING *`,
      [name, latitude, longitude, sequence, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Stop not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Error updating stop:', err);
    res.status(500).json({ message: 'Failed to update stop' });
  }
});

app.delete('/api/stops/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM bus_stops WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Stop not found' });
    }

    res.json({ message: 'Stop deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting stop:', err);
    res.status(500).json({ message: 'Failed to delete stop' });
  }
});

// // Add a new student
// app.post('/api/students', async (req, res) => {
//   const { name, class: className, guardian_id, route_id } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO students (name, class, guardian_id, route_id)
//        VALUES ($1, $2, $3, $4)
//        RETURNING *`,
//       [name, className, guardian_id, route_id]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error inserting student:', err);
//     res.status(500).json({ message: 'Failed to add student' });
//   }
// });

// // Add a new student
// app.post('/api/students', async (req, res) => {
//   const { name, class: className, guardian_id, route_id } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO students (name, class, guardian_id, route_id)
//        VALUES ($1, $2, $3, $4)
//        RETURNING *`,
//       [name, className, guardian_id, route_id]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error inserting student:', err);
//     res.status(500).json({ message: 'Failed to add student' });
//   }
// });
// POST: Add new student
app.post('/api/students', async (req, res) => {
  const { name, class: className, guardian_id, route_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO students (name, class, guardian_id, route_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, className, guardian_id, route_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Error inserting student:', err);
    res.status(500).json({ message: 'Failed to add student' });
  }
});



// Start server
app.listen(5000, () => {
  console.log('🚀 Backend server running at http://localhost:5000');
});
