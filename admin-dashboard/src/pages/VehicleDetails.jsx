import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider, Avatar
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => setVehicle(data));
  }, [id]);

  if (!vehicle) return <Typography sx={{ p: 4 }}>Loading vehicle details...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">Vehicle Info</Typography>
      <Divider sx={{ mb: 3 }} />

      <Card elevation={3} sx={{ backgroundColor: '#f1f8e9', mb: 3 }}>
        <CardContent>
          <Avatar sx={{ bgcolor: 'green', mb: 1 }}><DirectionsBusIcon /></Avatar>
          <Typography>Plate Number: <strong>{vehicle.number_plate}</strong></Typography>
          <Typography>Make/Model: <strong>{vehicle.make} {vehicle.model}</strong></Typography>
          <Typography>Capacity: <strong>{vehicle.capacity}</strong></Typography>
        </CardContent>
      </Card>

      <Card elevation={3} sx={{ backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Avatar sx={{ bgcolor: 'blue', mb: 1 }}><PersonIcon /></Avatar>
          <Typography>Driver: <strong>{vehicle.driver_name || 'N/A'}</strong></Typography>
          <Typography>Attendant: <strong>{vehicle.attender_name || 'N/A'}</strong></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VehicleDetails;