import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data));
  }, [id]);

  if (!student) return <Typography sx={{ p: 4 }}>Loading student details...</Typography>;

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