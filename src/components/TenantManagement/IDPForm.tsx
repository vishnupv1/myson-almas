import React from 'react';
import { TextField, Typography } from '@mui/material';

const IDPForm = () => {
  return (
    <>
      <Typography variant="h6">Identity Provider Details</Typography>
      <TextField
        id="clientId"
        aria-describedby="clientId"
        variant="outlined"
        required
        label="Client ID"
        className="form-control"
        sx={{ marginTop: '5px', marginBottom: '5px' }}
        fullWidth
      />
      <TextField
        id="redirectUri"
        aria-describedby="redirectUri"
        variant="outlined"
        required
        label="Redirect URI"
        className="form-control"
        sx={{ marginTop: '5px', marginBottom: '5px' }}
        fullWidth
      />
      <TextField
        id="authority"
        aria-describedby="authority"
        variant="outlined"
        required
        label="Authority"
        className="form-control"
        sx={{ marginTop: '5px', marginBottom: '5px' }}
        fullWidth
      />
    </>
  );
};

export default IDPForm;
