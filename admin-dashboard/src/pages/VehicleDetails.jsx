import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider, Avatar
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';

// Mock vehicle data
const mockVehicleData = {
  'Skl1': {
    number_plate: 'KA03MV2109',
    make: 'Tata',
    model: 'Starbus',
    capacity: '44/51',
    driver_name: 'William Benjamin',
    attender_name: 'William Benji'
  },
  'Skl2': {
    number_plate: 'KA03MV2110',
    make: 'Ashok Leyland',
    model: 'Viking',
    capacity: '23/30',
    driver_name: 'Sebastian Michael',
    attender_name: 'Sebastian Michael'
  },
  'Skl3': {
    number_plate: 'KA03MV2111',
    make: 'Tata',
    model: 'Starbus',
    capacity: '23/30',
    driver_name: 'Burke Farrell Idris',
    attender_name: 'Burke Farrell Idris'
  },
  'Skl4': {
    number_plate: 'KA03MV2112',
    make: 'Ashok Leyland',
    model: 'Viking',
    capacity: '23/30',
    driver_name: 'Chirta Anto',
    attender_name: 'Anto Akkara'
  },
  'Skl5': {
    number_plate: 'KA03MV2113',
    make: 'Tata',
    model: 'Starbus',
    capacity: '23/30',
    driver_name: 'Charlotte Aria Emma',
    attender_name: 'Aria Emma'
  }
};

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchVehicleData = () => {
      // Simulate network delay
      setTimeout(() => {
        const vehicleData = mockVehicleData[id] || {
          number_plate: 'N/A',
          make: 'N/A',
          model: 'N/A',
          capacity: 'N/A',
          driver_name: 'N/A',
          attender_name: 'N/A'
        };
        setVehicle(vehicleData);
      }, 500);
    };

    fetchVehicleData();
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