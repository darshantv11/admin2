import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  return (
<Paper elevation={2} sx={{ padding: 2, width: '100%' }}>
    <Paper
  elevation={2}
  sx={{ padding: 2, maxWidth: '100%', backgroundColor: 'white' }}
></Paper>
          <Typography variant="h6">Vehicles</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Plate</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Capacity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map(vehicle => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.id}</TableCell>
              <TableCell>{vehicle.number_plate}</TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default VehiclesPage;
