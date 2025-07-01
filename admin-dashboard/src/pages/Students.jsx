// FRONTEND: Admin Dashboard (React + Vite + MUI) with Guardian/Route Dropdowns + Edit Student Support
// --------------------------------------------------

// src/pages/Students.jsx
import React, { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import { Edit, Delete, Visibility, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockStudents = [
  { id: 1, name: 'Alice Johnson', class: '10th Grade', guardian_id: 1, route_id: 1 },
  { id: 2, name: 'Bob Smith', class: '9th Grade', guardian_id: 2, route_id: 2 },
  { id: 3, name: 'Charlie Brown', class: '11th Grade', guardian_id: 3, route_id: 1 },
  { id: 4, name: 'Diana Prince', class: '8th Grade', guardian_id: 1, route_id: 3 },
  { id: 5, name: 'Eve Wilson', class: '12th Grade', guardian_id: 2, route_id: 2 },
];

const mockGuardians = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
];

const mockRoutes = [
  { id: 1, route_name: 'Route 1A' },
  { id: 2, route_name: 'Route 2B' },
  { id: 3, route_name: 'Route 3C' },
];

const StudentsPage = () => {
  const [students, setStudents] = useState(mockStudents);
  const [guardians] = useState(mockGuardians);
  const [routes] = useState(mockRoutes);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', class: '', guardian_id: '', route_id: '' });
  const [editedStudent, setEditedStudent] = useState({ name: '', class: '', guardian_id: '', route_id: '' });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const navigate = useNavigate();

  const handleDeleteClick = (student) => {
    const updatedStudents = students.filter(s => s.id !== student.id);
    setStudents(updatedStudents);
  };

  const handleAddSubmit = () => {
    const newId = Math.max(...students.map(s => s.id)) + 1;
    const studentToAdd = { ...newStudent, id: newId };
    setStudents([...students, studentToAdd]);
    setAddOpen(false);
    setNewStudent({ name: '', class: '', guardian_id: '', route_id: '' });
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
    const updatedStudents = students.map(s => 
      s.id === selectedStudent.id ? { ...s, ...editedStudent } : s
    );
    setStudents(updatedStudents);
    setEditOpen(false);
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Students</Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ mb: 2 }}
        onClick={() => setAddOpen(true)}
      >
        Add Student
      </Button>
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

      {/* Add Dialog */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>Add New Student</DialogTitle>
        <DialogContent>
          <TextField label="Name" fullWidth margin="dense" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
          <TextField label="Class" fullWidth margin="dense" value={newStudent.class} onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })} />
          <TextField select fullWidth margin="dense" value={newStudent.guardian_id} onChange={(e) => setNewStudent({ ...newStudent, guardian_id: e.target.value })} SelectProps={{ native: true }}>
            <option disabled value="">-- Select Guardian --</option>
            {guardians.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
          </TextField>
          <TextField select fullWidth margin="dense" value={newStudent.route_id} onChange={(e) => setNewStudent({ ...newStudent, route_id: e.target.value })} SelectProps={{ native: true }}>
            <option disabled value="">-- Select Route --</option>
            {routes.map((r) => <option key={r.id} value={r.id}>{r.route_name}</option>)}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSubmit}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          <TextField label="Name" fullWidth margin="dense" value={editedStudent.name} onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })} />
          <TextField label="Class" fullWidth margin="dense" value={editedStudent.class} onChange={(e) => setEditedStudent({ ...editedStudent, class: e.target.value })} />
          <TextField select fullWidth margin="dense" value={editedStudent.guardian_id} onChange={(e) => setEditedStudent({ ...editedStudent, guardian_id: e.target.value })} SelectProps={{ native: true }}>
            <option disabled value="">-- Select Guardian --</option>
            {guardians.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
          </TextField>
          <TextField select fullWidth margin="dense" value={editedStudent.route_id} onChange={(e) => setEditedStudent({ ...editedStudent, route_id: e.target.value })} SelectProps={{ native: true }}>
            <option disabled value="">-- Select Route --</option>
            {routes.map((r) => <option key={r.id} value={r.id}>{r.route_name}</option>)}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default StudentsPage;
