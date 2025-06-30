// FRONTEND: Admin Dashboard (React + Vite + MUI)
// --------------------------------------------------

// src/pages/RouteDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Stack,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, IconButton
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const RouteDetails = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedStop, setSelectedStop] = useState(null);
  const [newStop, setNewStop] = useState({
    name: '',
    latitude: '',
    longitude: '',
    sequence: ''
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/routes/${id}`)
      .then(res => res.json())
      .then(data => setRoute(data));
  }, [id]);

  const refreshRoute = () => {
    fetch(`http://localhost:5000/api/routes/${id}`)
      .then(res => res.json())
      .then(data => setRoute(data));
  };

  const handleAddStop = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/stops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newStop, route_id: route.id })
      });

      if (res.ok) {
        setAddOpen(false);
        setNewStop({ name: '', latitude: '', longitude: '', sequence: '' });
        refreshRoute();
      }
    } catch (err) {
      console.error('Failed to add stop', err);
    }
  };

  const handleEditStop = (stop) => {
    setSelectedStop(stop);
    setNewStop({ ...stop });
    setEditOpen(true);
  };

  const handleEditSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/stops/${selectedStop.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStop)
      });
      if (res.ok) {
        setEditOpen(false);
        refreshRoute();
      }
    } catch (err) {
      console.error('Failed to update stop', err);
    }
  };

  const handleDeleteStop = async (stopId) => {
    if (window.confirm('Are you sure you want to delete this stop?')) {
      try {
        await fetch(`http://localhost:5000/api/stops/${stopId}`, {
          method: 'DELETE'
        });
        refreshRoute();
      } catch (err) {
        console.error('Failed to delete stop', err);
      }
    }
  };

  if (!route) return <Typography sx={{ padding: 4 }}>Loading route details...</Typography>;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>Route Summary</Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 3 }}>
        <Card elevation={3} sx={{ backgroundColor: '#f1f5fb' }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>Route Info</Typography>
            <Typography variant="body1">ID: <strong>{route.id}</strong></Typography>
            <Typography variant="body1">Name: <strong>{route.route_name}</strong></Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Card elevation={3} sx={{ backgroundColor: '#e3f2fd' }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>Bus Assignment</Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <Box>
                <Avatar sx={{ bgcolor: '#1565c0' }}>
                  <DirectionsBusIcon />
                </Avatar>
              </Box>
              <Box>
                <Typography>Bus ID: <strong>{route.bus_id || 'N/A'}</strong></Typography>
                <Typography>Plate: <strong>{route.number_plate || 'N/A'}</strong></Typography>
              </Box>
              <Box>
                <Avatar sx={{ bgcolor: '#2e7d32' }}>
                  <PersonIcon />
                </Avatar>
              </Box>
              <Box>
                <Typography>Driver: <strong>{route.driver_name || 'N/A'}</strong></Typography>
                <Typography>Attendant: <strong>{route.attender_name || 'N/A'}</strong></Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="text.secondary">Stops</Typography>
            {route.stops && route.stops.length > 0 ? (
              <List>
                {route.stops.map((stop, index) => (
                  <ListItem key={index} divider
                    secondaryAction={
                      <>
                        <IconButton onClick={() => handleEditStop(stop)} color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteStop(stop.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }>
                    <ListItemText
                      primary={<><LocationOnIcon sx={{ mr: 1, color: 'gray' }} />{stop.sequence}. {stop.name}</>}
                      secondary={`Latitude: ${stop.latitude}, Longitude: ${stop.longitude}`}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No stops assigned.</Typography>
            )}

            <Button variant="contained" sx={{ mt: 2 }} onClick={() => setAddOpen(true)}>
              Add Stop
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Add Dialog */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>Add New Stop</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Stop Name" margin="dense"
            value={newStop.name} onChange={(e) => setNewStop({ ...newStop, name: e.target.value })} />
          <TextField fullWidth label="Latitude" margin="dense"
            value={newStop.latitude} onChange={(e) => setNewStop({ ...newStop, latitude: e.target.value })} />
          <TextField fullWidth label="Longitude" margin="dense"
            value={newStop.longitude} onChange={(e) => setNewStop({ ...newStop, longitude: e.target.value })} />
          <TextField fullWidth label="Sequence" margin="dense"
            value={newStop.sequence} onChange={(e) => setNewStop({ ...newStop, sequence: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddStop}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Stop</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Stop Name" margin="dense"
            value={newStop.name} onChange={(e) => setNewStop({ ...newStop, name: e.target.value })} />
          <TextField fullWidth label="Latitude" margin="dense"
            value={newStop.latitude} onChange={(e) => setNewStop({ ...newStop, latitude: e.target.value })} />
          <TextField fullWidth label="Longitude" margin="dense"
            value={newStop.longitude} onChange={(e) => setNewStop({ ...newStop, longitude: e.target.value })} />
          <TextField fullWidth label="Sequence" margin="dense"
            value={newStop.sequence} onChange={(e) => setNewStop({ ...newStop, sequence: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RouteDetails;
