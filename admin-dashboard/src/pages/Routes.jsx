// FRONTEND: Edit and Delete for Bus Routes
// --------------------------------------------------

// src/pages/Routes.jsx
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RoutesPage = () => {
  const [routes, setRoutes] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [editedRoute, setEditedRoute] = useState({ route_name: '', bus_id: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    fetch('http://localhost:5000/api/routes')
      .then(res => res.json())
      .then(data => setRoutes(data));
  };

  const handleEditClick = (route) => {
    setSelectedRoute(route);
    setEditedRoute({ route_name: route.route_name, bus_id: route.bus_id });
    setEditOpen(true);
  };

  const handleDeleteClick = (route) => {
    setSelectedRoute(route);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/api/routes/${selectedRoute.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setDeleteOpen(false);
      fetchRoutes();
    });
  };

  const handleEditSubmit = () => {
    fetch(`http://localhost:5000/api/routes/${selectedRoute.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedRoute)
    })
    .then(res => res.json())
    .then(() => {
      setEditOpen(false);
      fetchRoutes();
    });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Bus Routes</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Bus ID</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map(route => (
            <TableRow key={route.id}>
              <TableCell>{route.id}</TableCell>
              <TableCell>{route.route_name}</TableCell>
              <TableCell>{route.bus_id}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => navigate(`/routes/${route.id}`)}>
                  <Visibility />
                </IconButton>
                <IconButton color="warning" onClick={() => handleEditClick(route)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteClick(route)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Modal */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Route</DialogTitle>
        <DialogContent>
          <TextField
            label="Route Name"
            fullWidth
            margin="dense"
            value={editedRoute.route_name}
            onChange={(e) => setEditedRoute({ ...editedRoute, route_name: e.target.value })}
          />
          <TextField
            label="Bus ID"
            fullWidth
            margin="dense"
            value={editedRoute.bus_id}
            onChange={(e) => setEditedRoute({ ...editedRoute, bus_id: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete route "{selectedRoute?.route_name}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default RoutesPage;
