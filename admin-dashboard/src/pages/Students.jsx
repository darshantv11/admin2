// FRONTEND: Admin Dashboard (React + Vite + MUI) with Guardian/Route Dropdowns + Edit Student Support
// --------------------------------------------------

// src/pages/Students.jsx
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import { Edit, Delete, Visibility, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [guardians, setGuardians] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', class: '', guardian_id: '', route_id: '' });
  const [editedStudent, setEditedStudent] = useState({ name: '', class: '', guardian_id: '', route_id: '' });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
    fetch('http://localhost:5000/api/users?role=guardian')
      .then(res => res.json())
      .then(setGuardians);
    fetch('http://localhost:5000/api/routes')
      .then(res => res.json())
      .then(setRoutes);
  }, []);

  const fetchStudents = () => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  const handleDeleteClick = (student) => {
    fetch(`http://localhost:5000/api/students/${student.id}`, {
      method: 'DELETE'
    }).then(() => fetchStudents());
  };

  const handleAddSubmit = () => {
    fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent)
    }).then(res => res.json())
      .then(() => {
        setAddOpen(false);
        setNewStudent({ name: '', class: '', guardian_id: '', route_id: '' });
        fetchStudents();
      });
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
