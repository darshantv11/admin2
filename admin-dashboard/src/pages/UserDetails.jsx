import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider, Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <Typography sx={{ p: 4 }}>Loading user profile...</Typography>;

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
