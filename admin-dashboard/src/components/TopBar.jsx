import React from 'react';
import { Box, Typography, IconButton, Divider, Avatar, FormControl, Select, MenuItem, TextField, InputAdornment, Paper } from '@mui/material';
import { Menu as MenuIcon, Notifications, Search, ArrowDropDown } from '@mui/icons-material';

const TopBar = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2, px: 3, background: 'transparent', minHeight: 80 }}>
    {/* Left: Hamburger */}
    <IconButton sx={{ mr: 2 }}>
      <MenuIcon fontSize="large" />
    </IconButton>
    {/* Center: Search Bar */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 2, px: 2, py: 0.5, minWidth: 340, maxWidth: 400, boxShadow: '0 2px 8px 0 rgba(16,30,54,0.04)' }}>
        <FormControl size="small" sx={{ minWidth: 120, background: 'transparent', mr: 1 }}>
          <Select value="" displayEmpty inputProps={{ 'aria-label': 'Select Type' }} sx={{ fontWeight: 500, fontSize: 15, background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <MenuItem value="">Select Type</MenuItem>
            <MenuItem value="TS">TS</MenuItem>
            <MenuItem value="FS">FS</MenuItem>
          </Select>
        </FormControl>
        <TextField
          size="small"
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: null,
            endAdornment: (
              <InputAdornment position="end">
                <Search sx={{ color: '#b0b7c3' }} />
              </InputAdornment>
            ),
          }}
          sx={{ background: 'transparent', minWidth: 120, fontSize: 15 }}
        />
      </Paper>
    </Box>
    {/* Right: Welcome, Live, Notification, Avatar */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
      <Box>
        <Typography fontWeight={700} fontSize={16} color="#181c32">Welcome Back!</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, bgcolor: 'green', borderRadius: '50%' }} />
          <Typography fontSize={13} color="#7e8299">Live: 08:43 AM</Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#fff6f1', borderRadius: '50%', p: 1 }}>
        <Notifications sx={{ color: '#ff7043' }} />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: '#f6f8fc' }} />
      <Avatar sx={{ bgcolor: '#181c32', width: 40, height: 40, fontWeight: 700, fontSize: 18 }}>WP</Avatar>
      <ArrowDropDown sx={{ color: '#181c32' }} />
    </Box>
  </Box>
);

export default TopBar;