// FRONTEND: Admin Dashboard (React + Vite + MUI) with Add + Edit User Support
// --------------------------------------------------

// src/pages/Users.jsx
import React, { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem
} from '@mui/material';
import { Edit, Delete, Visibility, Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

// Mock data
const mockUsers = {
  driver: [
    { id: 1, name: 'William Benjamin', email: 'william@example.com', phone: '9876543210', role: 'driver' },
    { id: 2, name: 'Sebastian Michael', email: 'sebastian@example.com', phone: '9876543211', role: 'driver' },
    { id: 3, name: 'Burke Farrell Idris', email: 'burke@example.com', phone: '9876543212', role: 'driver' },
  ],
  attendant: [
    { id: 4, name: 'William Benji', email: 'benji@example.com', phone: '9876543213', role: 'attendant' },
    { id: 5, name: 'Sebastian Michael', email: 'sebastian.att@example.com', phone: '9876543214', role: 'attendant' },
    { id: 6, name: 'Burke Farrell Idris', email: 'burke.att@example.com', phone: '9876543215', role: 'attendant' },
  ],
  guardian: [
    { id: 7, name: 'John Doe', email: 'john@example.com', phone: '9876543216', role: 'guardian' },
    { id: 8, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543217', role: 'guardian' },
    { id: 9, name: 'Bob Johnson', email: 'bob@example.com', phone: '9876543218', role: 'guardian' },
  ]
};

const UsersPage = () => {
  const { role } = useParams();
  const [users, setUsers] = useState(mockUsers[role] || []);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', role: role });
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleDeleteClick = (user) => {
    const updatedUsers = users.filter(u => u.id !== user.id);
    setUsers(updatedUsers);
  };

  const handleAddSubmit = () => {
    const newId = Math.max(...users.map(u => u.id)) + 1;
    const userToAdd = { ...newUser, id: newId };
    setUsers([...users, userToAdd]);
    setAddOpen(false);
    setNewUser({ name: '', email: '', phone: '', role });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({ name: user.name, email: user.email, phone: user.phone });
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    const updatedUsers = users.map(u => 
      u.id === selectedUser.id ? { ...u, ...editedUser } : u
    );
    setUsers(updatedUsers);
    setEditOpen(false);
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">{role.charAt(0).toUpperCase() + role.slice(1)}s</Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ mb: 2 }}
        onClick={() => setAddOpen(true)}
      >
        Add {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
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
                <IconButton color="primary" onClick={() => navigate(`/users/${user.id}`)}>
                  <Visibility />
                </IconButton>
                <IconButton color="warning" onClick={() => handleEditClick(user)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteClick(user)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Dialog */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>Add New {role.charAt(0).toUpperCase() + role.slice(1)}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSubmit}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit {role.charAt(0).toUpperCase() + role.slice(1)}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={editedUser.phone}
            onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UsersPage;
