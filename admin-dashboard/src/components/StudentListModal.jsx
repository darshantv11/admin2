import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';

const StudentListModal = ({ open, onClose, stopInfo, students, selectedStudentId, onStudentClick, onPrev, onNext }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          p: 0,
          background: '#fff',
          minHeight: 700,
          maxWidth: 1200,
        }
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 700, fontSize: 28, pt: 4, pb: 1, letterSpacing: 0.5 }}>
        Student List
      </DialogTitle>
      <Typography sx={{ textAlign: 'center', color: '#7e8299', fontSize: 16, mb: 3 }}>
        Below is a list of students for the
      </Typography>
      {/* Stop Info Row - Larger and More Prominent */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
        <Paper elevation={0} sx={{ background: '#f8fafd', borderRadius: 3, px: 5, py: 3, display: 'flex', gap: 6 }}>
          <Box>
            <Typography sx={{ color: '#7e8299', fontSize: 16, fontWeight: 600 }}>Route Code</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{stopInfo.routeCode}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#7e8299', fontSize: 16, fontWeight: 600 }}>Route Type</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{stopInfo.routeType}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#7e8299', fontSize: 16, fontWeight: 600 }}>Stop No.</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{stopInfo.stopSeqNo}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#7e8299', fontSize: 16, fontWeight: 600 }}>Stop Name</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{stopInfo.stopName}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#7e8299', fontSize: 16, fontWeight: 600 }}>Arrival Time</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{stopInfo.arrivalTime}</Typography>
          </Box>
        </Paper>
      </Box>
      {/* Table with Arrows */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <IconButton onClick={onPrev} sx={{ mx: 1, bgcolor: '#f8fafd', borderRadius: 2 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Table Header as Card/Box with shadow and more padding */}
          <Paper elevation={2} sx={{ background: '#f8fafd', borderRadius: 3, px: 3, py: 2, mb: 0.5, boxShadow: '0 2px 12px 0 rgba(16,30,54,0.06)' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '60px 100px 1.5fr 100px 100px 1.5fr 90px', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Sr. No.</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>School ID</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Name</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Gender</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Class</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Guardians</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 15, textAlign: 'center' }}>Action</Typography>
            </Box>
          </Paper>
          <Table sx={{ background: '#f8fafd', borderRadius: 3, minWidth: 700 }}>
            <TableBody>
              {students.map((student, idx) => (
                <TableRow
                  key={student.id}
                  sx={student.id === selectedStudentId ? {
                    background: '#fff',
                    fontWeight: 700,
                    '& td': { fontWeight: 700, color: '#181c32' },
                  } : {}}
                  onClick={() => onStudentClick && onStudentClick(student)}
                >
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{idx + 1}</TableCell>
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{student.schoolId}</TableCell>
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{student.name}</TableCell>
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{student.gender}</TableCell>
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{student.className}</TableCell>
                  <TableCell sx={{ fontWeight: student.id === selectedStudentId ? 700 : 500, textAlign: 'center' }}>{student.guardian}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <IconButton size="small"><EditIcon sx={{ color: '#7e8299' }} /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <IconButton onClick={onNext} sx={{ mx: 1, bgcolor: '#f8fafd', borderRadius: 2 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <DialogActions sx={{ justifyContent: 'center', pb: 4, pt: 2 }}>
        <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 700, fontSize: 18, borderRadius: 2, px: 6, py: 1.5 }} startIcon={<AddIcon />}>
          Students
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentListModal; 