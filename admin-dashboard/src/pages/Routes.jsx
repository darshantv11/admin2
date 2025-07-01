// 📁 Routes.jsx – Full Code with View, Edit, Delete, Add
import React, { useState } from 'react';
import {
  Box, Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Avatar, Toolbar, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Stack, Pagination, Divider
} from '@mui/material';
import { Edit, Delete, Visibility, CloudUpload, Add, Search, Notifications, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';


const mockRoutes = [
  {
    code: 'Skl1', type: 'TS', vehicle: 'KA03MV2109', driver: 'Ganesh Prasana K..', attendant: 'William Benjamin', start: '08:00', end: '17:00', stops: 10, students: 45,
  },
  {
    code: 'Skl2', type: 'FS', vehicle: 'KA03MV2109', driver: 'Walter Paliakkara ..', attendant: 'Sebastian Michael', start: '08:00', end: '17:00', stops: 12, students: 23,
  },
  {
    code: 'Skl3', type: 'TS', vehicle: 'KA03MV2109', driver: 'Olivia Emma Alia', attendant: 'Burke Farrell Idris', start: '08:00', end: '17:00', stops: 16, students: 15,
  },
  {
    code: 'Skl4', type: 'TS', vehicle: 'KA03MV2109', driver: 'Nikil Kumar Raj', attendant: 'Chirta Anto Akkara', start: '08:00', end: '17:00', stops: 9, students: 49, highlight: true,
  },
  {
    code: 'Skl5', type: 'FS', vehicle: 'KA03MV2109', driver: 'Noah Theodore Henry', attendant: 'Charlotte Aria Emma', start: '08:00', end: '17:00', stops: 10, students: 43,
  },
  {
    code: 'Skl6', type: 'TS', vehicle: 'KA03MV2109', driver: 'Aurora Hazel', attendant: 'Maverick Sewell', start: '08:00', end: '17:00', stops: 15, students: 44,
  },
  {
    code: 'Skl7', type: 'FS', vehicle: 'KA03MV2109', driver: 'Aryan Arjun Kumar', attendant: 'Warrick Andrew Conrad', start: '08:00', end: '17:00', stops: 12, students: 30,
  },
  {
    code: 'Skl8', type: 'FS', vehicle: 'KA03MV2109', driver: 'Aditya Advik Aarav', attendant: 'Kendrick Tedmond', start: '08:00', end: '17:00', stops: 11, students: 40,
  },
  {
    code: 'Skl9', type: 'FS', vehicle: 'KA03MV2109', driver: 'Amir Ahaan', attendant: 'Victor Hercules', start: '08:00', end: '17:00', stops: 17, students: 38,
  },
];

const RoutesPage = () => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  // Filter logic (not functional for mock)
  const filteredRoutes = mockRoutes;

  return (
    <Box sx={{ p: 0 }}>
      <TopBar />
      {/* Table Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5" fontWeight={700}>Routes List</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<CloudUpload />} sx={{ bgcolor: '#fff', borderColor: '#d1d5db', color: '#0e1e40', fontWeight: 600, height: 40 }}>
            UPLOAD CSV
          </Button>
          <Button variant="contained" startIcon={<Add />} sx={{ bgcolor: '#0e1e40', fontWeight: 600, height: 40 }} onClick={() => window.location.href='/routes/add'}>
            ADD NEW
          </Button>
        </Box>
      </Box>
      {/* Table */}
      <Paper elevation={1} sx={{ p: 0, borderRadius: 3 }}>
      <Table>
        <TableHead>
            <TableRow sx={{ background: '#f5f7fa' }}>
              <TableCell sx={{ fontWeight: 700 }}>Code</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Vehicle</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Driver</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Attendant</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Start</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>End</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Stops</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Students</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {filteredRoutes.map((row, idx) => (
              <TableRow
                key={row.code}
                sx={row.highlight ? { background: '#f7fafd', fontWeight: 700 } : {}}
              >
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.code}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.type}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.vehicle}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.driver}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.attendant}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.start}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.end}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.stops}</TableCell>
                <TableCell sx={row.highlight ? { fontWeight: 700, color: row.highlight ? '#0e1e40' : undefined } : {}}>{row.students}</TableCell>
              <TableCell>
                  <IconButton color="primary" onClick={() => navigate(`/routes/${row.code}`)}><Visibility /></IconButton>
                  <IconButton color="warning"><Edit /></IconButton>
                  <IconButton color="error"><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
      {/* Pagination */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography fontSize={15}>Show:</Typography>
          <Select size="small" value={rowsPerPage} sx={{ minWidth: 60 }}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            </Select>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button size="small" variant="outlined" sx={{ minWidth: 90 }} disabled>{'< Previous'}</Button>
          <Pagination count={12} page={page} onChange={(_, v) => setPage(v)} shape="rounded" color="primary" />
          <Button size="small" variant="outlined" sx={{ minWidth: 90 }}>{'Next >'}</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RoutesPage;
