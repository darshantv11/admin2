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
  Stack
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RouteDetails = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/routes/${id}`)
      .then(res => res.json())
      .then(data => setRoute(data));
  }, [id]);

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
                  <ListItem key={index} divider>
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
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default RouteDetails;