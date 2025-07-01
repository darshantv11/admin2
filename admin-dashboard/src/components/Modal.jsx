import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, TextField, Box } from '@mui/material';

// Custom Trash Icon (rounded style)
const TrashBinIcon = (props) => (
  <svg width="72" height="72" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="56" height="56" rx="18" fill="#FFF0F0"/>
    <path d="M20 22.5C20 21.1193 21.1193 20 22.5 20H33.5C34.8807 20 36 21.1193 36 22.5V23.5H20V22.5Z" fill="#FF3B3B"/>
    <rect x="20" y="23.5" width="16" height="13.5" rx="2.5" fill="#FF3B3B"/>
    <rect x="25" y="27" width="2" height="6" rx="1" fill="white"/>
    <rect x="29" y="27" width="2" height="6" rx="1" fill="white"/>
    <rect x="24" y="18" width="8" height="3" rx="1.5" fill="#FF3B3B"/>
  </svg>
);

const Modal = ({ open, onClose, onDelete, id, password, setPassword }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, minWidth: 600, maxWidth: 600, p: 0, borderRadius: '24px' },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', pt: 4, pb: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TrashBinIcon style={{ marginBottom: 8 }} />
          <Typography variant="h5" sx={{ color: '#ff3b3b', fontWeight: 800, fontSize: 28, mb: 1, letterSpacing: 0.5 }}>
            Are You Sure
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', pb: 0, pt: 0 }}>
        <Typography sx={{ color: '#23272e', fontWeight: 500, fontSize: 18, mb: 0.5 }}>
          Do you really want to delete these records?
        </Typography>
        <Typography sx={{ color: '#7e8299', fontWeight: 400, fontSize: 15, mb: 3, mt: 0.5 }}>
          This process can't be undone. Please enter the password to delete.
        </Typography>
        <TextField
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Please enter the password"
          sx={{
            mb: 2,
            background: '#fafbfc',
            borderRadius: 2,
            width: '70%',
            mx: 'auto',
            display: 'block',
          }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3, pt: 0 }}>
        <Button onClick={onClose} variant="outlined" sx={{ color: '#23272e', borderColor: '#e0e0e0', bgcolor: '#f5f5f5', fontWeight: 600, px: 4, mr: 2, borderRadius: 2, fontSize: 16 }}>
          Cancel
        </Button>
        <Button
          onClick={() => onDelete(id, password)}
          variant="contained"
          sx={{ bgcolor: '#ff3b3b', color: '#fff', fontWeight: 600, px: 4, borderRadius: 2, fontSize: 16, '&:hover': { bgcolor: '#e53935' } }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal; 