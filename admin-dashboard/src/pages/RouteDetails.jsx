// FRONTEND: Admin Dashboard (React + Vite + MUI)
// --------------------------------------------------

// src/pages/RouteDetails.jsx
import React, { useState } from 'react';
import {
  Box, Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Avatar, Divider, FormControl, Select, MenuItem, InputAdornment, TextField
} from '@mui/material';
import { ArrowBack, Menu as MenuIcon, Notifications, Search, CloudUpload, Edit, Delete, Person, DirectionsBus, Add, Pause, PlayArrow, PersonAdd, Link as LinkIcon } from '@mui/icons-material';
import routeMap from '../assets/route-map.png'; // adjust path as needed
import StudentListModal from '../components/StudentListModal';
import TopBar from '../components/TopBar';

const mockRoute = {
  id: '4C',
  code: '4C',
  type: '4C',
  startTime: '7:00 AM',
  endTime: '9:30 AM',
  totalStops: 10,
  totalStudents: 38,
  vehicle: 'KA02MC4080',
  driver: 'Anand Ingalagi',
  attendant: 'Rocky Bhai',
  stops: [
    { seq: 1, name: 'Stop 1', lat: "12.97° North", lng: "77.59° East", time: '9:30', students: 49 },
    { seq: 2, name: 'Stop 2', lat: "12.97° North", lng: "77.59° East", time: '9:30', students: 38, assign: true },
    { seq: 3, name: 'Stop 3', lat: "12.97° North", lng: "77.59° East", time: '9:30', students: 40 },
    { seq: 4, name: 'Stop 4', lat: "12.97° North", lng: "77.59° East", time: '9:30', students: 34, highlight: true },
    { seq: 5, name: 'Stop 5', lat: "12.97° North", lng: "77.59° East", time: '9:30', students: 12 },
  ]
};

const mockStudents = [
  { id: 1, schoolId: 1, name: 'Ganesh Prasana V', gender: 'Male', className: '1A', guardian: 'Nikhil KA + 1' },
  { id: 2, schoolId: 2, name: 'Walter Paliakkarqaa', gender: 'Male', className: '2D', guardian: 'Nikhil KA + 1' },
  { id: 3, schoolId: 3, name: 'Nikhil Kumar Sunil', gender: 'Male', className: '2S', guardian: 'Nikhil KA + 1' },
  { id: 4, schoolId: 4, name: 'Raju J K', gender: 'Male', className: '3A', guardian: 'Nikhil KA + 1' },
  { id: 5, schoolId: 5, name: 'K.M. Rajan', gender: 'Male', className: '4B', guardian: 'Nikhil KA + 1' },
];

const RouteDetails = () => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const [studentModalOpen, setStudentModalOpen] = React.useState(false);
  const [selectedStop, setSelectedStop] = React.useState(null);

  const handleStudentsClick = (stop) => {
    setSelectedStop(stop);
    setStudentModalOpen(true);
  };

  const stopInfo = selectedStop ? {
    routeCode: '4C',
    routeType: 'TF',
    stopSeqNo: selectedStop.seq,
    stopName: selectedStop.name,
    arrivalTime: selectedStop.time,
  } : {};

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <TopBar />
      {/* Page Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton><ArrowBack /></IconButton>
        <Typography variant="h6" fontWeight={700} sx={{ ml: 1 }}>4C Route Details</Typography>
      </Box>
      {/* Details and Map Row */}
      <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
        {/* Left: Route Details Card */}
        <Paper elevation={0} sx={{ flex: 1, background: '#f8fafd', borderRadius: 5, p: 3, boxShadow: '0 2px 12px 0 rgba(16,30,54,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 260, height: 260 }}>
          <Typography fontWeight={700} fontSize={18} mb={2} sx={{ textAlign: 'left' }}>Route Details</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', rowGap: 1.5, columnGap: 2, mb: 2 }}>
            <Box>
              <Typography fontSize={13} color="#7e8299">Route ID</Typography>
              <Typography fontWeight={700}>4C</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Route Code</Typography>
              <Typography fontWeight={700}>4C</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Route Type</Typography>
              <Typography fontWeight={700}>4C</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Start Time</Typography>
              <Typography fontWeight={700}>7:00 Am</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">End Time</Typography>
              <Typography fontWeight={700}>9:30 Am</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Total Bus Stops</Typography>
              <Typography fontWeight={700}>10</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Total Students</Typography>
              <Typography fontWeight={700}>38</Typography>
            </Box>
            <Box />
          </Box>
          <Box sx={{ height: 12 }} />
          <Typography fontWeight={700} fontSize={16} mb={1} sx={{ textAlign: 'left' }}>Assigned Assets</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 2 }}>
            <Box>
              <Typography fontSize={13} color="#7e8299">Assigned Vehicle</Typography>
              <Typography fontWeight={700}>KA02MC4080</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Assigned Driver</Typography>
              <Typography fontWeight={700}>Anand Ingalagi</Typography>
            </Box>
            <Box>
              <Typography fontSize={13} color="#7e8299">Attendants</Typography>
              <Typography fontWeight={700}>Rocky Bhai</Typography>
            </Box>
          </Box>
        </Paper>
        {/* Right: Map Card - match shape and size to Route Details card */}
        <Paper elevation={0} sx={{ flex: 1, background: '#f8fafd', borderRadius: 5, p: 3, boxShadow: '0 2px 12px 0 rgba(16,30,54,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 260, height: 260 }}>
          <img src={routeMap} alt="Route Map" style={{ width: '100%', height: '100%', borderRadius: 20, objectFit: 'cover' }} />
        </Paper>
      </Box>
      {/* All Stops Table */}
      <Typography fontWeight={700} fontSize={18} mb={2}>All Stops</Typography>
      <Paper elevation={0} sx={{ background: '#f8fafd', borderRadius: 5, p: 0, boxShadow: '0 2px 12px 0 rgba(16,30,54,0.06)' }}>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow sx={{ background: '#f7f9fc', height: 56 }}>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 80, textAlign: 'center', py: 1.5 }}>Sqnc No</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 120, textAlign: 'center', py: 1.5 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 150, textAlign: 'center', py: 1.5 }}>Latitude</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 150, textAlign: 'center', py: 1.5 }}>Longitude</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 120, textAlign: 'center', py: 1.5 }}>Arrival Time</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 100, textAlign: 'center', py: 1.5 }}>Students</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 140, textAlign: 'center', py: 1.5, pr: 4 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockRoute.stops.map((stop, idx) => (
              <TableRow key={stop.seq} sx={stop.highlight ? { background: '#fff', fontWeight: 700, boxShadow: '0 2px 8px 0 rgba(16,30,54,0.04)' } : {}}>
                <TableCell sx={{ fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5 }}>{stop.seq}</TableCell>
                <TableCell sx={{ fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5 }}>{stop.name}</TableCell>
                <TableCell sx={{ fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5 }}>{stop.lat}</TableCell>
                <TableCell sx={{ fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5 }}>{stop.lng}</TableCell>
                <TableCell sx={{ fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5 }}>{stop.time}</TableCell>
                <TableCell sx={{ color: '#ff7043', fontWeight: stop.highlight ? 700 : 500, fontSize: 15, textAlign: 'center', py: 1.5, cursor: 'pointer' }} onClick={() => handleStudentsClick(stop)}>{stop.students}</TableCell>
                <TableCell sx={{ textAlign: 'center', py: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <LinkIcon sx={{ color: '#ff7043', fontSize: 20 }} />
                    {stop.assign && <Box component="span" sx={{ color: '#7e8299', fontWeight: 600, fontSize: 13, ml: 0.5 }}>Assign Student</Box>}
                    <Pause sx={{ color: '#7e8299', fontSize: 20, mx: 0.5 }} />
                    <PlayArrow sx={{ color: '#7e8299', fontSize: 20, mx: 0.5 }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination and Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          {/* Pagination */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography fontSize={15}>Show:</Typography>
            <FormControl size="small" sx={{ minWidth: 60 }}>
              <Select value={rowsPerPage}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
            <Button size="small" variant="outlined" sx={{ minWidth: 90 }} disabled>{'< Previous'}</Button>
            <Button size="small" variant="contained" sx={{ minWidth: 40, bgcolor: '#181c32', color: '#fff', fontWeight: 700 }}>1</Button>
            <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>2</Button>
            <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>3</Button>
            <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>4</Button>
            <Button size="small" variant="outlined" sx={{ minWidth: 90 }}>{'Next >'}</Button>
          </Box>
          {/* Actions */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" startIcon={<Edit />} sx={{ fontWeight: 700, borderColor: '#181c32', color: '#181c32', px: 3 }}>
              EDIT STOPS
            </Button>
            <Button variant="contained" startIcon={<Add />} sx={{ fontWeight: 700, bgcolor: '#181c32', px: 3 }}>
              ADD STOPS
            </Button>
          </Box>
        </Box>
      </Paper>
      <StudentListModal
        open={studentModalOpen}
        onClose={() => setStudentModalOpen(false)}
        stopInfo={stopInfo}
        students={mockStudents}
        selectedStudentId={4}
        onStudentClick={() => {}}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </Box>
  );
};

export default RouteDetails;
