import React from 'react';
import { Box, Paper, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, IconButton, Divider, Avatar, InputAdornment } from '@mui/material';
import { Delete, CloudUpload, Menu as MenuIcon, Notifications, Search } from '@mui/icons-material';
import TopBar from '../components/TopBar';

const AddRoutePage = () => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <TopBar />
      {/* Combined Route Basic Details + Stop Details Card */}
      <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
            Route Basic Details
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Route ID*
              </Typography>
              <TextField value="30" fullWidth sx={{ bgcolor: '#fff' }} disabled />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Route SklCode
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Route Type
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, mt: 4, textAlign: 'left' }}>
            Stop Details
          </Typography>
          <Box sx={{ background: '#fff', borderRadius: 2, boxShadow: '0 2px 8px 0 rgba(16,30,54,0.04)', p: 0, mb: 2 }}>
            {/* Headings Row */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1, px: 3, pt: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Stp No</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Stp Type</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Stp Name</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Stp Lat</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Stp lng</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Arvl Time</Typography>
              </Box>
              <Box sx={{ width: 40 }} />
            </Box>
            {/* First Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, px: 3 }}>
              <TextField value="1" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField value="FS" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField value="Stop 1" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField value="Stop lat" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField value="Stop lng" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField value="09:00" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <IconButton color="error"><Delete /></IconButton>
            </Box>
            {/* Second Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', px: 3, pb: 2 }}>
              <TextField placeholder="Enter Stop no" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField placeholder="Enter Type" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField placeholder="Please stop name" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField placeholder="Enter latitude" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField placeholder="Enter longitude" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <TextField placeholder="Enter time" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
              <IconButton color="error"><Delete /></IconButton>
            </Box>
          </Box>
          <Box sx={{ pt: 3, textAlign: 'right' }}>
            <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 600, px: 5, height: 44 }}>Save</Button>
          </Box>
        </Box>
      </Paper>
      {/* Route Asset Assign Input Fields */}
      <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden' }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
            Route Asset Assign Input Fields
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Vehicle No
              </Typography>
              <TextField value="KA 01 MV 2345" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Vehicle Driver
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
                Vehicle Attendants
              </Typography>
              <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
            </Box>
            <Box sx={{ pt: 4, textAlign: 'right' }}>
            <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 600, px: 5, height: 44 }}>Save</Button>
            </Box>
          </Box>
        </Box>
        <Divider />
        {/* Add and Assign Student */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', textAlign: 'left' }}>
              Add and Assign Student
            </Typography>
            <Button variant="outlined" startIcon={<CloudUpload />} sx={{ bgcolor: '#fff', borderColor: '#d1d5db', color: '#0e1e40', fontWeight: 600, height: 40 }}>
              UPLOAD CSV
            </Button>
          </Box>
          {/* Headings Row */}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1, px: 3, pt: 2 }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Select Stop</Typography>
            </Box>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Student ID</Typography>
            </Box>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>Student Name</Typography>
            </Box>
            <Box sx={{ width: 40 }} />
          </Box>
          {/* First Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 3 }}>
            <FormControl fullWidth sx={{ flex: 1, mr: 2 }}>
              <Select value="Begur Bommanahalli">
                <MenuItem value="Begur Bommanahalli">Begur Bommanahalli</MenuItem>
              </Select>
            </FormControl>
            <TextField value="Pick up" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
            <TextField value="Walter paliakkara Paliakkara" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
            <IconButton color="error"><Delete /></IconButton>
            
          </Box>
          {/* Second Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', px: 3, pb: 2 }}>
            <FormControl fullWidth sx={{ flex: 1, mr: 2 }}>
              <Select value="Begur Bommanahalli">
                <MenuItem value="Begur Bommanahalli">Begur Bommanahalli</MenuItem>
              </Select>
            </FormControl>
            <TextField placeholder="Enter" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
            <TextField placeholder="Enter" fullWidth sx={{ flex: 1, bgcolor: '#fff', mr: 2 }} />
            <IconButton color="error"><Delete /></IconButton>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 3, pt: 2, textAlign: 'right' }}>
          <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 600, px: 5, height: 44 }}>Save</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddRoutePage; 