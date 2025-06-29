import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { DirectionsBus, Dashboard, People, School, Commute } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const menu = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Routes', icon: <DirectionsBus />, path: '/routes' },
    { text: 'Vehicles', icon: <Commute />, path: '/vehicles' },
    { text: 'Students', icon: <School />, path: '/students' },
    { text: 'Drivers', icon: <People />, path: '/users/driver' },
    { text: 'Attendants', icon: <People />, path: '/users/attendant' },
    { text: 'Guardians', icon: <People />, path: '/users/guardian' },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0e1e40',
          color: 'white'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6">TRACK EYE</Typography>
      </Toolbar>
      <List>
        {menu.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;