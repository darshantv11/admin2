import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider, Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// Mock data
const mockUsers = [
  { id: 1, name: 'William Benjamin', email: 'william@example.com', phone: '9876543210', role: 'driver' },
  { id: 2, name: 'Sebastian Michael', email: 'sebastian@example.com', phone: '9876543211', role: 'driver' },
  { id: 3, name: 'Burke Farrell Idris', email: 'burke@example.com', phone: '9876543212', role: 'driver' },
  { id: 4, name: 'William Benji', email: 'benji@example.com', phone: '9876543213', role: 'attendant' },
  { id: 5, name: 'Sebastian Michael', email: 'sebastian.att@example.com', phone: '9876543214', role: 'attendant' },
  { id: 6, name: 'Burke Farrell Idris', email: 'burke.att@example.com', phone: '9876543215', role: 'attendant' },
  { id: 7, name: 'John Doe', email: 'john@example.com', phone: '9876543216', role: 'guardian' },
  { id: 8, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543217', role: 'guardian' },
  { id: 9, name: 'Bob Johnson', email: 'bob@example.com', phone: '9876543218', role: 'guardian' },
];

const UserDetails = () => {
  const { id } = useParams();
  const user = mockUsers.find(u => u.id === parseInt(id));

  if (!user) return <Typography sx={{ p: 4 }}>User not found</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      {/* <Typography variant="h4" gutterBottom color="primary">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Info</Typography> */}

<Typography variant="h4" gutterBottom color="primary">
  {user?.role ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Info` : 'User Info'}
</Typography>


      <Divider sx={{ mb: 3 }} />

      <Card elevation={3}>
        <CardContent>
          <Avatar sx={{ bgcolor: '#0288d1', mb: 1 }}><PersonIcon /></Avatar>
          <Typography>Name: <strong>{user.name}</strong></Typography>
          <Typography>Email: <strong>{user.email}</strong></Typography>
          <Typography>Phone: <strong>{user.phone}</strong></Typography>
          <Typography>Role: <strong>{user.role}</strong></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetails;
