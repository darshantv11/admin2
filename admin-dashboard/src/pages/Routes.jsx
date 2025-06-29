import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const RoutesPage = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/routes')
      .then(res => res.json())
      .then(data => setRoutes(data));
  }, []);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Bus Routes</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Bus ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map(route => (
            <TableRow key={route.id}>
              <TableCell>{route.id}</TableCell>
              <TableCell>{route.route_name}</TableCell>
              <TableCell>{route.bus_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RoutesPage;
