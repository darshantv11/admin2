import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Vehicles</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Plate</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Actions</TableCell>
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
              <TableCell>
               {/* // <IconButton color="primary"><Visibility /></IconButton> */}
               <IconButton color="primary" onClick={() => navigate(`/vehicles/${vehicle.id}`)}>
  <Visibility />
</IconButton>

                <IconButton color="warning"><Edit /></IconButton>
                <IconButton color="error"><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default VehiclesPage;