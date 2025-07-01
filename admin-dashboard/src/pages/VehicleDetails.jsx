import React from 'react';
import TopBar from '../components/TopBar';
import { Box, Typography, IconButton, Button, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import busImage from '../assets/bus-image.jpg';

const vehicleDetails = {
  id: '10DF45',
  number: 'KA02 MC 4080',
  type: 'Bus',
  year: 2020,
  manufacturer: 'Ashok Leyland',
  owner: 'Ashok Leyland',
  operator: 'Ashok Leyland',
  model: 'GARUD 12M',
  capacity: 49,
};

const vehicleDocuments = [
  'Registration Certificate (RC)',
  'Contract Carriage Permit',
  'Fitness Certificate',
  'Insurance',
];

const VehicleDetailsCard = () => (
  <Paper
    elevation={0}
    sx={{
      p: 5,
      borderRadius: 4,
      background: '#f8f9fb',
      mb: 4,
      boxShadow: 'none',
      width: '100%',
      maxWidth: '100%',
    }}
  >
    <Typography sx={{ color: '#ff7043', fontWeight: 700, mb: 3, fontSize: 22, textAlign: 'left' }}>
      Vehicles Details
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 3, columnGap: 2 }}>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Vehicles ID</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.id}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Vehicles Number</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.number}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Vehicles Type</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.type}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Manufacturer</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.manufacturer}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Vehicles Year</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.year}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Owner</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.owner}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Capacity</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.capacity}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Operator</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.operator}</Typography>
      </Box>
      <Box>
        <Typography fontSize={13} color="#b0b3b9" fontWeight={400}>Model</Typography>
        <Typography fontWeight={700} fontSize={16} color="#222">{vehicleDetails.model}</Typography>
      </Box>
    </Box>
  </Paper>
);

const VehicleDocumentsCard = () => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 3,
      background: '#f8f9fb',
      mt: 3,
      boxShadow: '0px 2px 12px 0px rgba(16,30,54,0.06)',
      maxWidth: '100%',
    }}
  >
    <Typography sx={{ color: '#ff7043', fontWeight: 700, mb: 2, fontSize: 20, textAlign: 'left' }}>
      Vehicles Documents
    </Typography>
    <List>
      {vehicleDocuments.map((doc, idx) => (
        <ListItem key={doc} divider={idx !== vehicleDocuments.length - 1} sx={{ py: 1.5 }}
          secondaryAction={<DownloadIcon sx={{ color: '#b0b3b9' }} />}>
          <ListItemText primaryTypographyProps={{ fontSize: 15, color: '#222' }} primary={`${idx + 1}   ${doc}`} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

const CarouselDots = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff7043', mx: 0.5 }} />
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e0e0e0', mx: 0.5 }} />
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e0e0e0', mx: 0.5 }} />
  </Box>
);

const VehicleDetails = () => {
  const vehicleNumber = 'KA03MV2109';

  return (
    <Box sx={{ background: '#f5f7fa', minHeight: '100vh' }}>
      <TopBar />
      {/* Header below TopBar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          mt: 2,
          px: 4,
        }}
      >
        <IconButton sx={{ mr: 1 }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1, color: '#b0b3b9', fontSize: 22 }}>
          {vehicleNumber} Details
        </Typography>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ borderRadius: 2, fontWeight: 600, bgcolor: '#fff', borderColor: '#bdbdbd', color: '#222', px: 3, py: 1 }}
        >
          EDIT
        </Button>
      </Box>
      {/* Main Content: Two columns */}
      <Box sx={{ maxWidth: 1500, ml: 2 }}>
        <Grid container spacing={6} sx={{ px: 2 }} alignItems="flex-start">
          {/* Left Section: Three stacked Vehicles Details cards */}
          <Grid item xs={12} md={9} lg={9}>
            <VehicleDetailsCard />
            <VehicleDetailsCard />
            <VehicleDetailsCard />
          </Grid>
          {/* Right Section: Bus image and documents, stacked and top-aligned */}
          <Grid item xs={12} md={5} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'flex-start', minWidth: 0, maxWidth: 680, ml: { xs: 0, md: 4, lg: 6 } }}>
            <Box sx={{ width: 660, maxWidth: '100%' }}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <img
                  src={busImage}
                  alt="Bus"
                  style={{ width: '100%', minHeight: 300, borderRadius: 20, objectFit: 'cover', display: 'block' }}
                />
                {/* Carousel dots */}
                <Box sx={{ position: 'absolute', bottom: 16, right: 24 }}>
                  <CarouselDots />
                </Box>
              </Box>
              <Box sx={{ width: '100%', mt: 0 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 8,
                    background: '#f8f9fb',
                    boxShadow: 'none',
                    width: '100%',
                    minHeight: 250,
                  }}
                >
                  <Typography sx={{ color: '#ff7043', fontWeight: 700, mb: 2, fontSize: 20, textAlign: 'left' }}>
                    Vehicles Documents
                  </Typography>
                  <List>
                    {vehicleDocuments.map((doc, idx) => (
                      <ListItem key={doc} divider={idx !== vehicleDocuments.length - 1} sx={{ py: 1.5 }}
                        secondaryAction={<DownloadIcon sx={{ color: '#b0b3b9' }} />}>
                        <ListItemText primaryTypographyProps={{ fontSize: 15, color: '#222' }} primary={`${idx + 1}   ${doc}`} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VehicleDetails;