import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Collapse, Box } from '@mui/material';
import { DirectionsBus, Dashboard, People, School, Commute, ExpandLess, ExpandMore, Add, ListAlt } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openRoutes, setOpenRoutes] = React.useState(true);

  // Helper to check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0e1e40',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>TRACK EYE</Typography>
      </Toolbar>
      <List>
        <ListItem button selected={isActive('/')} onClick={() => navigate('/')}
          sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Routes Section with submenu */}
        <Box sx={{ background: '#192a56', borderRadius: 3, mx: 1, my: 0.5, p: 0.5 }}>
          <ListItem button onClick={() => setOpenRoutes(!openRoutes)} sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ color: 'white' }}><DirectionsBus /></ListItemIcon>
            <ListItemText primary="Routes" />
            {openRoutes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openRoutes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                selected={isActive('/routes')}
                onClick={() => navigate('/routes')}
                sx={{ pl: 5, color: isActive('/routes') ? '#ff7043' : 'white', fontWeight: isActive('/routes') ? 700 : 400 }}
              >
                <ListItemIcon sx={{ color: isActive('/routes') ? '#ff7043' : 'white', minWidth: 32 }}><ListAlt /></ListItemIcon>
                <ListItemText primary="View Routes List" />
              </ListItem>
              <ListItem
                button
                selected={isActive('/routes/add')}
                onClick={() => navigate('/routes/add')}
                sx={{ pl: 5, color: isActive('/routes/add') ? '#ff7043' : 'white', fontWeight: isActive('/routes/add') ? 700 : 400 }}
              >
                <ListItemIcon sx={{ color: isActive('/routes/add') ? '#ff7043' : 'white', minWidth: 32 }}><Add /></ListItemIcon>
                <ListItemText primary="Add new Route" />
              </ListItem>
            </List>
          </Collapse>
        </Box>

        <ListItem button selected={isActive('/vehicles')} onClick={() => navigate('/vehicles')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><Commute /></ListItemIcon>
          <ListItemText primary="Vehicles" />
        </ListItem>
        <ListItem button selected={isActive('/drivers')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
          <ListItemText primary="Drivers" />
        </ListItem>
        <ListItem button selected={isActive('/attendants')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
          <ListItemText primary="Attendants" />
        </ListItem>
        <ListItem button selected={isActive('/students')} onClick={() => navigate('/students')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><School /></ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button selected={isActive('/app-users')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
          <ListItemText primary="App Users" />
        </ListItem>
        <ListItem button selected={isActive('/schools')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><School /></ListItemIcon>
          <ListItemText primary="Schools" />
        </ListItem>
        <ListItem button selected={isActive('/reports')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><ListAlt /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button selected={isActive('/transport-compliance')} sx={{ borderRadius: 2, mx: 1, my: 0.5 }}>
          <ListItemIcon sx={{ color: 'white' }}><ListAlt /></ListItemIcon>
          <ListItemText primary="Transport Compliance" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;