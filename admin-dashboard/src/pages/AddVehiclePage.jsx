import React from 'react';
import { Box, Paper, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, IconButton, Divider, Avatar, InputAdornment } from '@mui/material';
import { Delete, CloudUpload, Menu as MenuIcon, Notifications, Search } from '@mui/icons-material';
import TopBar from '../components/TopBar';

const AddVehiclePage = () => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <TopBar />
      {/* Vehicle Basic Details Card */}
      <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
            Vehicle Basic Details
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Vehicle No*
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Make
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Model
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Capacity
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Driver
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Attendant
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Route Assignment
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
          </Box>
          <Box sx={{ pt: 3, textAlign: 'right' }}>
            <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 600, px: 5, height: 44 }}>Save</Button>
          </Box>
        </Box>
      </Paper>
      {/* Asset Upload Section */}
      <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden' }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
            Upload Vehicle Asset Documents
          </Typography>
          <Button variant="outlined" startIcon={<CloudUpload />} sx={{ bgcolor: '#fff', borderColor: '#d1d5db', color: '#0e1e40', fontWeight: 600, height: 40 }}>
            UPLOAD RC/INSURANCE
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddVehiclePage; 