// 📁 Vehicles.jsx – Full Code with View, Edit, Delete, Add
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { Edit, Delete, Visibility, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [attenders, setAttenders] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [editedVehicle, setEditedVehicle] = useState({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });
  const [newVehicle, setNewVehicle] = useState({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });

  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
    fetch('http://localhost:5000/api/users?role=driver').then(res => res.json()).then(setDrivers);
    fetch('http://localhost:5000/api/users?role=attendant').then(res => res.json()).then(setAttenders);
  }, []);

  const fetchVehicles = () => {
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));
  };

  const handleEditClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setEditedVehicle({
      number_plate: vehicle.number_plate,
      make: vehicle.make,
      model: vehicle.model,
      capacity: vehicle.capacity,
      driver_id: vehicle.driver_id || '',
      attender_id: vehicle.attender_id || ''
    });
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    fetch(`http://localhost:5000/api/vehicles/${selectedVehicle.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedVehicle)
    })
      .then(res => res.json())
      .then(() => {
        setEditOpen(false);
        fetchVehicles();
      });
  };

  const handleDeleteClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/api/vehicles/${selectedVehicle.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setDeleteOpen(false);
        fetchVehicles();
      });
  };

  const handleAddSubmit = () => {
    fetch('http://localhost:5000/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVehicle)
    })
      .then(res => res.json())
      .then(() => {
        setAddOpen(false);
        setNewVehicle({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });
        fetchVehicles();
      });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Vehicles
        <IconButton color="primary" onClick={() => setAddOpen(true)}>
          <Add />
        </IconButton>
      </Typography>
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
                <IconButton color="primary" onClick={() => navigate(`/vehicles/${vehicle.id}`)}>
                  <Visibility />
                </IconButton>
                <IconButton color="warning" onClick={() => handleEditClick(vehicle)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteClick(vehicle)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Vehicle Modal */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>Add Vehicle</DialogTitle>
        <DialogContent>
          <TextField label="Plate Number" fullWidth margin="dense" value={newVehicle.number_plate} onChange={(e) => setNewVehicle({ ...newVehicle, number_plate: e.target.value })} />
          <TextField label="Make" fullWidth margin="dense" value={newVehicle.make} onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })} />
          <TextField label="Model" fullWidth margin="dense" value={newVehicle.model} onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })} />
          <TextField label="Capacity" fullWidth margin="dense" value={newVehicle.capacity} onChange={(e) => setNewVehicle({ ...newVehicle, capacity: e.target.value })} />
          <FormControl fullWidth margin="dense">
            <InputLabel>Driver</InputLabel>
            <Select value={newVehicle.driver_id} label="Driver" onChange={(e) => setNewVehicle({ ...newVehicle, driver_id: e.target.value })}>
              {drivers.map(driver => (
                <MenuItem key={driver.id} value={driver.id}>{driver.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Attendant</InputLabel>
            <Select value={newVehicle.attender_id} label="Attendant" onChange={(e) => setNewVehicle({ ...newVehicle, attender_id: e.target.value })}>
              {attenders.map(att => (
                <MenuItem key={att.id} value={att.id}>{att.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSubmit}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Vehicle</DialogTitle>
        <DialogContent>
          <TextField label="Plate Number" fullWidth margin="dense" value={editedVehicle.number_plate} onChange={(e) => setEditedVehicle({ ...editedVehicle, number_plate: e.target.value })} />
          <TextField label="Make" fullWidth margin="dense" value={editedVehicle.make} onChange={(e) => setEditedVehicle({ ...editedVehicle, make: e.target.value })} />
          <TextField label="Model" fullWidth margin="dense" value={editedVehicle.model} onChange={(e) => setEditedVehicle({ ...editedVehicle, model: e.target.value })} />
          <TextField label="Capacity" fullWidth margin="dense" value={editedVehicle.capacity} onChange={(e) => setEditedVehicle({ ...editedVehicle, capacity: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete vehicle "{selectedVehicle?.number_plate}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default VehiclesPage;
