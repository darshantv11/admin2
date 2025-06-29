// 📁 Users.jsx – Full Code with View, Edit, Delete
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const UsersPage = () => {
  const { role } = useParams();
  const [users, setUsers] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [role]);

  const fetchUsers = () => {
    fetch(`http://localhost:5000/api/users?role=${role}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({ name: user.name, email: user.email, phone: user.phone });
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedUser)
    })
      .then(res => res.json())
      .then(() => {
        setEditOpen(false);
        fetchUsers();
      });
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setDeleteOpen(false);
        fetchUsers();
      });
  };

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

      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit User</DialogTitle>
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

      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete user "{selectedUser?.name}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UsersPage;
