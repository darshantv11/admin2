import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Students</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Route ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(student => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.route_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StudentsPage;