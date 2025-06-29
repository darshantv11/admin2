import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const UsersPage = () => {
  const { role } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:5000/api/users?role=${role}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [role]);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">{role.charAt(0).toUpperCase() + role.slice(1)}s</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                
               <IconButton color="primary" onClick={() => navigate(`/user/${user.id}`)}>
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

export default UsersPage;
