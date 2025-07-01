import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

// Mock data
const mockStudents = [
  { id: 1, name: 'Alice Johnson', class: '10th Grade', guardian_name: 'John Doe', route_id: 1 },
  { id: 2, name: 'Bob Smith', class: '9th Grade', guardian_name: 'Jane Smith', route_id: 2 },
  { id: 3, name: 'Charlie Brown', class: '11th Grade', guardian_name: 'Bob Johnson', route_id: 1 },
  { id: 4, name: 'Diana Prince', class: '8th Grade', guardian_name: 'John Doe', route_id: 3 },
  { id: 5, name: 'Eve Wilson', class: '12th Grade', guardian_name: 'Jane Smith', route_id: 2 },
];

const StudentDetails = () => {
  const { id } = useParams();
  const student = mockStudents.find(s => s.id === parseInt(id));

  if (!student) return <Typography sx={{ p: 4 }}>Student not found</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">Student Profile</Typography>
      <Divider sx={{ mb: 3 }} />

      <Card elevation={3} sx={{ backgroundColor: '#fff8e1' }}>
        <CardContent>
          <Typography>Name: <strong>{student.name}</strong></Typography>
          <Typography>Class: <strong>{student.class}</strong></Typography>
          <Typography>Guardian: <strong>{student.guardian_name}</strong></Typography>
          <Typography>Route ID: <strong>{student.route_id}</strong></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StudentDetails;