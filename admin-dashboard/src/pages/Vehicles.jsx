// 📁 Vehicles.jsx – Full Code with View, Edit, Delete, Add
import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem, Select, InputLabel, FormControl, Box, Avatar, InputAdornment, Stack, Divider
} from '@mui/material';
import { Edit, Delete, Visibility, Add, CloudUpload, Search, Notifications, Menu as MenuIcon, ExpandMore, ExpandLess } from '@mui/icons-material';
import TargetIcon from '../components/TargetIcon';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Modal from '../components/Modal';

const mockVehicles = [
  {
    code: 'Skl1', vehicle: 'KA03MV2109', route: '5C, 4C, 1A', seats: '44/51', driver: 'William Benjamin', attendant: 'William Benji', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl2', vehicle: 'KA03MV2109', route: '1C', seats: '23/30', driver: 'Sebastian Michael', attendant: 'Sebastian Michael', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl3', vehicle: 'KA03MV2109', route: '6C', seats: '23/30', driver: 'Burke Farrell Idris', attendant: 'Burke Farrell Idris', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl4', vehicle: 'KA03MV2109', route: '5T', seats: '23/30', driver: 'Chirta Anto', attendant: 'Anto Akkara', start: '08:00', end: '17:00', highlight: true,
    subRows: [
      { route: '4C', seats: '23/30', driver: 'Sebastian Michael', attendant: 'Burke Farrell', start: '08:00', end: '17:00', highlight: true },
      { route: '4C', seats: '23/30', driver: 'Sebastian Michael', attendant: 'Farrell Idris', start: '16:00', end: '18:00', highlight: true },
    ]
  },
  {
    code: 'Skl5', vehicle: 'KA03MV2109', route: '3D', seats: '23/30', driver: 'Charlotte Aria Emma', attendant: 'Aria Emma', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl6', vehicle: 'KA03MV2109', route: '1A', seats: '23/30', driver: 'Maverick Sewell', attendant: 'Maverick Sewell', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl7', vehicle: 'KA03MV2109', route: '5R', seats: '23/30', driver: 'Warrick Andrew', attendant: 'Warrick Andrew', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl8', vehicle: 'KA03MV2109', route: '5A', seats: '23/30', driver: 'Kendrick Tedmond', attendant: 'Kendrick Tedmond', start: '08:00', end: '17:00',
  },
  {
    code: 'Skl9', vehicle: 'KA03MV2109', route: '9A', seats: '23/30', driver: 'Victor Hercules', attendant: 'Victor Hercules', start: '08:00', end: '17:00',
  },
];

const mockDrivers = [
  { id: 1, name: 'William Benjamin' },
  { id: 2, name: 'Sebastian Michael' },
  { id: 3, name: 'Burke Farrell Idris' },
  { id: 4, name: 'Charlotte Aria Emma' },
  { id: 5, name: 'Maverick Sewell' },
  { id: 6, name: 'Warrick Andrew' },
  { id: 7, name: 'Kendrick Tedmond' },
  { id: 8, name: 'Victor Hercules' },
];
const mockAttenders = [
  { id: 1, name: 'William Benji' },
  { id: 2, name: 'Sebastian Michael' },
  { id: 3, name: 'Burke Farrell Idris' },
  { id: 4, name: 'Aria Emma' },
  { id: 5, name: 'Maverick Sewell' },
  { id: 6, name: 'Warrick Andrew' },
  { id: 7, name: 'Kendrick Tedmond' },
  { id: 8, name: 'Victor Hercules' },
];

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(mockVehicles);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [drivers] = useState(mockDrivers);
  const [attenders] = useState(mockAttenders);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [editedVehicle, setEditedVehicle] = useState({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });
  const [newVehicle, setNewVehicle] = useState({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const rowsPerPage = 10;
  const [expandedRows, setExpandedRows] = useState({});
  // Filter logic (not functional for mock)
  const filteredVehicles = vehicles;

  const handleEditClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setEditedVehicle({
      number_plate: vehicle.number_plate,
      make: vehicle.make,
      model: vehicle.model,
      capacity: vehicle.capacity,
      driver_id: vehicle.driver_id || '',
      attender_id: vehicle.attender_id || ''
    });
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    setVehicles(vehicles.map(v => v === selectedVehicle ? { ...selectedVehicle, ...editedVehicle } : v));
    setEditOpen(false);
  };

  const handleDeleteClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setDeleteOpen(true);
    setPassword('');
  };

  const handleDeleteConfirm = (id, passwordValue) => {
    // You can add password validation here if needed
    setVehicles(vehicles.filter(v => v.code !== id));
    setDeleteOpen(false);
    setPassword('');
  };

  const handleAddSubmit = () => {
    setVehicles([...vehicles, { ...newVehicle, code: `Skl${vehicles.length + 1}` }]);
    setAddOpen(false);
    setNewVehicle({ number_plate: '', make: '', model: '', capacity: '', driver_id: '', attender_id: '' });
  };

  const handleExpandClick = (code) => {
    setExpandedRows((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  return (
    <Box sx={{ p: 0, ml: 2 }}>
      <TopBar/>
            
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, mt: 2 }}>
        <Typography variant="h5" fontWeight={700}>Vehicles List</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 140, background: '#fff' }}>
            {/* <Select value={type} displayEmpty inputProps={{ 'aria-label': 'Select Type' }} sx={{ fontWeight: 500, fontSize: 15 }} onChange={e => setType(e.target.value)}>
              <MenuItem value="">Select Type</MenuItem>
              <MenuItem value="TS">TS</MenuItem>
              <MenuItem value="FS">FS</MenuItem>
            </Select> */}
          </FormControl>
          {/* <TextField
            size="small"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ background: '#fff', minWidth: 220 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          /> */}
          <Button variant="outlined" startIcon={<CloudUpload />} sx={{ ml: 2, bgcolor: '#fff', borderColor: '#d1d5db', color: '#0e1e40', fontWeight: 600 }}>
            UPLOAD CSV
          </Button>
          <Button variant="contained" startIcon={<Add />} sx={{ ml: 1, bgcolor: '#0e1e40', fontWeight: 600 }}>
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
              <TableCell sx={{ fontWeight: 700 }}>Vehicle</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Route</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Seats</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Driver</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Attendant</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Start</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>End</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {filteredVehicles.map((row, idx) => (
    <React.Fragment key={row.code}>
      <TableRow sx={row.highlight ? { background: '#f7fafd', fontWeight: 700 } : {}}>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.code}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.vehicle}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            {row.route}
            {row.subRows && (
              <IconButton
                size="small"
                onClick={() => handleExpandClick(row.code)}
                sx={{ ml: 1, p: 0.5, verticalAlign: 'middle' }}
              >
                {expandedRows[row.code] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )}
          </Box>
        </TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.seats}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.driver}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.attendant}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.start}</TableCell>
        <TableCell sx={row.highlight ? { fontWeight: 700 } : {}}>{row.end}</TableCell>
        <TableCell>
          <IconButton color="default" onClick={() => navigate(`/vehicles/${row.code}`)}>
            <Visibility />
          </IconButton>
          <IconButton color="default"><Edit /></IconButton>
          <IconButton color="default" onClick={() => handleDeleteClick(row)}><Delete /></IconButton>
          <IconButton>
            <TargetIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      {/* SubRows for expanded vehicles */}
      {row.subRows && expandedRows[row.code] && row.subRows.map((sub, i) => (
        <TableRow key={i} sx={sub.highlight ? { background: '#fff', fontWeight: 700 } : {}}>
          <TableCell />
          <TableCell />
          <TableCell sx={{ pl: 6, fontWeight: sub.highlight ? 700 : 400 }}>
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
              {sub.route}
            </Box>
          </TableCell>
          <TableCell sx={sub.highlight ? { fontWeight: 700 } : {}}>{sub.seats}</TableCell>
          <TableCell sx={sub.highlight ? { fontWeight: 700 } : {}}>{sub.driver}</TableCell>
          <TableCell sx={sub.highlight ? { fontWeight: 700 } : {}}>{sub.attendant}</TableCell>
          <TableCell sx={sub.highlight ? { fontWeight: 700 } : {}}>{sub.start}</TableCell>
          <TableCell sx={sub.highlight ? { fontWeight: 700 } : {}}>{sub.end}</TableCell>
          <TableCell>
            <IconButton color="default" onClick={() => navigate(`/vehicles/${row.code}`)}>
              <Visibility />
            </IconButton>
            <IconButton color="default"><Edit /></IconButton>
            <IconButton color="default" onClick={() => handleDeleteClick(sub)}><Delete /></IconButton>
            <IconButton>
              <TargetIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </React.Fragment>
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
          <Button size="small" variant="contained" sx={{ minWidth: 40, bgcolor: '#181c32', color: '#fff', fontWeight: 700 }}>1</Button>
          <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>2</Button>
          <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>3</Button>
          <Button size="small" variant="outlined" sx={{ minWidth: 40 }}>4</Button>
          <Button size="small" variant="outlined" sx={{ minWidth: 90 }}>{'Next >'}</Button>
        </Stack>
      </Box>

      {/* Add Vehicle Modal */}
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>Add Vehicle</DialogTitle>
        <DialogContent>
          <TextField label="Plate Number" fullWidth margin="dense" value={newVehicle.number_plate} onChange={(e) => setNewVehicle({ ...newVehicle, number_plate: e.target.value })} />
          <TextField label="Make" fullWidth margin="dense" value={newVehicle.make} onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })} />
          <TextField label="Model" fullWidth margin="dense" value={newVehicle.model} onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })} />
          <TextField label="Capacity" fullWidth margin="dense" value={newVehicle.capacity} onChange={(e) => setNewVehicle({ ...newVehicle, capacity: e.target.value })} />
          <FormControl fullWidth margin="dense">
            <InputLabel>Driver</InputLabel>
            <Select value={newVehicle.driver_id} label="Driver" onChange={(e) => setNewVehicle({ ...newVehicle, driver_id: e.target.value })}>
              {drivers.map(driver => (
                <MenuItem key={driver.id} value={driver.id}>{driver.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Attendant</InputLabel>
            <Select value={newVehicle.attender_id} label="Attendant" onChange={(e) => setNewVehicle({ ...newVehicle, attender_id: e.target.value })}>
              {attenders.map(att => (
                <MenuItem key={att.id} value={att.id}>{att.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSubmit}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Vehicle</DialogTitle>
        <DialogContent>
          <TextField label="Plate Number" fullWidth margin="dense" value={editedVehicle.number_plate} onChange={(e) => setEditedVehicle({ ...editedVehicle, number_plate: e.target.value })} />
          <TextField label="Make" fullWidth margin="dense" value={editedVehicle.make} onChange={(e) => setEditedVehicle({ ...editedVehicle, make: e.target.value })} />
          <TextField label="Model" fullWidth margin="dense" value={editedVehicle.model} onChange={(e) => setEditedVehicle({ ...editedVehicle, model: e.target.value })} />
          <TextField label="Capacity" fullWidth margin="dense" value={editedVehicle.capacity} onChange={(e) => setEditedVehicle({ ...editedVehicle, capacity: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Modal */}
      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={handleDeleteConfirm}
        id={selectedVehicle ? selectedVehicle.code : ''}
        password={password}
        setPassword={setPassword}
      />
    </Box>
  );
};

export default VehiclesPage;