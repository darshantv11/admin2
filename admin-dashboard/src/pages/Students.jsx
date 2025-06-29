// 📁 Students.jsx – Full Code with View, Edit, Delete
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editedStudent, setEditedStudent] = useState({ name: '', class: '', guardian_id: '', route_id: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditedStudent({
      name: student.name,
      class: student.class,
      guardian_id: student.guardian_id,
      route_id: student.route_id
    });
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    fetch(`http://localhost:5000/api/students/${selectedStudent.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedStudent)
    })
      .then(res => res.json())
      .then(() => {
        setEditOpen(false);
        fetchStudents();
      });
  };

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/api/students/${selectedStudent.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setDeleteOpen(false);
        fetchStudents();
      });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Students</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Guardian ID</TableCell>
            <TableCell>Route ID</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(student => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.guardian_id}</TableCell>
              <TableCell>{student.route_id}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => navigate(`/students/${student.id}`)}>
                  <Visibility />
                </IconButton>
                <IconButton color="warning" onClick={() => handleEditClick(student)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteClick(student)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={editedStudent.name}
            onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
          />
          <TextField
            label="Class"
            fullWidth
            margin="dense"
            value={editedStudent.class}
            onChange={(e) => setEditedStudent({ ...editedStudent, class: e.target.value })}
          />
          <TextField
            label="Guardian ID"
            fullWidth
            margin="dense"
            value={editedStudent.guardian_id}
            onChange={(e) => setEditedStudent({ ...editedStudent, guardian_id: e.target.value })}
          />
          <TextField
            label="Route ID"
            fullWidth
            margin="dense"
            value={editedStudent.route_id}
            onChange={(e) => setEditedStudent({ ...editedStudent, route_id: e.target.value })}
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
          <Typography>Are you sure you want to delete student "{selectedStudent?.name}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default StudentsPage;

