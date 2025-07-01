// import React from 'react';
// import { Box, Paper, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, IconButton, Divider, Avatar, InputAdornment } from '@mui/material';
// import { Delete, CloudUpload, Menu as MenuIcon, Notifications, Search } from '@mui/icons-material';
// import TopBar from '../components/TopBar';

// const AddVehiclePage = () => {
//   return (
//     <Box sx={{ width: '100%', mt: 2 }}>
//       <TopBar />
//       {/* Vehicle Basic Details Card */}
//       <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden', mb: 3 }}>
//         <Box sx={{ p: 3, pb: 2 }}>
//           <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
//             Vehicle Basic Details
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Vehicle No*
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Make
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Model
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Capacity
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 3 }}>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Driver
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Attendant
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#23272e', mb: 1, textAlign: 'left' }}>
//                 Route Assignment
//               </Typography>
//               <TextField placeholder="Please enter" fullWidth sx={{ bgcolor: '#fff' }} />
//             </Box>
//           </Box>
//           <Box sx={{ pt: 3, textAlign: 'right' }}>
//             <Button variant="contained" sx={{ bgcolor: '#ff7043', fontWeight: 600, px: 5, height: 44 }}>Save</Button>
//           </Box>
//         </Box>
//       </Paper>
//       {/* Asset Upload Section */}
//       <Paper elevation={1} sx={{ p: 0, borderRadius: 3, background: '#f7f9fc', overflow: 'hidden' }}>
//         <Box sx={{ p: 3, pb: 2 }}>
//           <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23272e', mb: 2, textAlign: 'left' }}>
//             Upload Vehicle Asset Documents
//           </Typography>
//           <Button variant="outlined" startIcon={<CloudUpload />} sx={{ bgcolor: '#fff', borderColor: '#d1d5db', color: '#0e1e40', fontWeight: 600, height: 40 }}>
//             UPLOAD RC/INSURANCE
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default AddVehiclePage; 


import React, { useRef, useState } from "react";
import TopBar from "../components/TopBar";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
 
const kycStatuses = ["Complete", "Incomplete"];
 
const AddVehiclePage = () => {
  const [image, setImage] = useState(null);
  const fileInput = useRef();
 
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };
  const handleUploadClick = () => fileInput.current.click();
  const handleRemoveImage = () => setImage(null);
 
  return (
    <>
      <TopBar />
      <Box sx={{ p: 4, background: "#fafbfc", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#181c32" }}>
            Edit/Add Driver
          </Typography>
          <Button
            variant="outlined"
            startIcon={
              <CloudUploadIcon sx={{ color: "#181c32", fontSize: 20 }} />
            }
            sx={{
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontWeight: 700,
              border: "1.5px solid #f1f1f3",
              color: "#181c32",
              background: "#fff",
              boxShadow: "0 1px 4px 0 rgba(16,30,54,0.04)",
              textTransform: "none",
              fontSize: 16,
              minWidth: 140,
              "&:hover": {
                background: "#f7f8fa",
                borderColor: "#e0e0e0",
              },
            }}
          >
            UPLOAD CSV
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 6,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          {/* Left: Two Driver Details Cards */}
          <Box
            sx={{
              flex: "0 0 650px",
              maxWidth: 650,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {[1, 2].map((_, idx) => (
              <Paper
                key={idx}
                sx={{
                  borderRadius: 3,
                  p: 2,
                  background: "#eef2f6",
                  boxShadow: "none",
                  mb: 0,
                  maxWidth: 650,
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 18,
                    mb: 2,
                  }}
                >
                  Drivers Basic Details
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    maxWidth: 750,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        Driver Name
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        Aadhar No.
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        Mobile Number
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        KYC Status
                      </Typography>
                      <TextField
                        select
                        variant="outlined"
                        size="small"
                        placeholder="Please select"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      >
                        {kycStatuses.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        License Number
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        License Expiry
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: 15,
                          mb: 0.5,
                        }}
                      >
                        Address
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Please enter"
                        sx={{
                          width: "100%",
                          background: "#fff",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }} />
                    <Box sx={{ flex: 1 }} />
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
          {/* Right: Upload Area */}
          <Box
            sx={{
              flex: "0 0 420px",
              maxWidth: 420,
              width: 420,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                borderRadius: 3,
                p: 0,
                background: "#fff",
                boxShadow: "none",
                mb: 0,
                minHeight: 340,
                width: "100%",
                maxWidth: 420,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px dashed #ff7043",
                flexDirection: "column",
                cursor: "pointer",
                transition: "border 0.2s",
              }}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={handleUploadClick}
            >
              <CloudUploadIcon sx={{ color: "#ff7043", fontSize: 54, mb: 1 }} />
              <Typography
                sx={{
                  color: "#181c32",
                  fontWeight: 600,
                  mb: 0.5,
                  fontSize: 16,
                }}
              >
                Drag and Drop Here
              </Typography>
              <Typography
                sx={{ color: "#b0b7c3", fontWeight: 500, fontSize: 15, mb: 2 }}
              >
                or Click Here to Upload
              </Typography>
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                style={{ display: "none" }}
                onChange={(e) =>
                  e.target.files[0] && handleFile(e.target.files[0])
                }
              />
            </Paper>
            {image && (
              <Box sx={{ position: "relative", width: 80, height: 80, mt: 1 }}>
                <img
                  src={image}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <IconButton
                  size="small"
                  onClick={handleRemoveImage}
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    bgcolor: "#fff",
                    border: "1px solid #eee",
                    boxShadow: 1,
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
        {/* Upload Documents Card */}
        <Box
          sx={{ mt: 4, maxWidth: 700, width: "100%", alignSelf: "flex-start" }}
        >
          <Paper
            sx={{
              borderRadius: 3,
              p: 3,
              background: "#eef2f6",
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{ color: "#181c32", fontWeight: 700, fontSize: 18, mb: 2 }}
            >
              Upload Documents
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <TextField
                select
                label="Select File Type"
                size="small"
                sx={{ minWidth: 180, background: "#fff", borderRadius: 2 }}
              >
                <MenuItem value="rc">Registration Certificate (RC)</MenuItem>
                <MenuItem value="fitness">Fitness Certificate</MenuItem>
                <MenuItem value="insurance">Insurance</MenuItem>
              </TextField>
              <Box
                sx={{
                  flex: 1,
                  border: "1.5px dashed #d1d5db",
                  borderRadius: 2,
                  p: 2,
                  textAlign: "center",
                  background: "#fff",
                }}
              >
                <Typography
                  sx={{ color: "#181c32", fontWeight: 600, fontSize: 15 }}
                >
                  Drag and Drop Here or Choose File
                </Typography>
                <Typography
                  sx={{ color: "#b0b7c3", fontWeight: 500, fontSize: 13 }}
                >
                  By default it will take others
                </Typography>
              </Box>
            </Box>
            {/* Uploaded Documents List */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  mb: 0.5,
                  borderRadius: 2,
                  boxShadow: "none",
                  background: "#fff",
                }}
              >
                <Typography
                  sx={{ width: 32, color: "#181c32", fontWeight: 500 }}
                >
                  1
                </Typography>
                <Typography sx={{ flex: 1, color: "#181c32", fontWeight: 500 }}>
                  Registration Certificate (RC)
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton size="small">
                    <VisibilityIcon sx={{ color: "#7e8299" }} />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon sx={{ color: "#7e8299" }} />
                  </IconButton>
                  <IconButton size="small">
                    <DownloadIcon sx={{ color: "#7e8299" }} />
                  </IconButton>
                </Box>
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: "none",
                  background: "#fff",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{ width: 32, color: "#181c32", fontWeight: 500 }}
                >
                  1
                </Typography>
                <Typography sx={{ flex: 1, color: "#181c32", fontWeight: 500 }}>
                  Fitness Certificate
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {/* No icons for uploading row */}
                </Box>
                {/* Green progress bar at the bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 4,
                    bgcolor: "transparent",
                  }}
                >
                  <Box
                    sx={{
                      width: "60%",
                      height: "100%",
                      bgcolor: "#2ecc40",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Paper>
        </Box>
        {/* Save Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              background: "#ff7043",
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 2,
              px: 8,
              py: 1.5,
              boxShadow: "none",
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};
 
export default AddVehiclePage;
 
 