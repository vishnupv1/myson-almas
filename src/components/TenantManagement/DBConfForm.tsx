import Box from '@mui/material/Box';
import React from 'react';
import './style.css';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
  TableContainer,
  TextField,
  Typography
} from '@mui/material';
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

const countries: readonly CountryType[] = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971'
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268'
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' }
];
const DBConfForm = () => {
  const [switchState, setSwitchState] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState('No');
  const [selectedVendorOption, setSelectedVendorOption] = React.useState('No');
  const handleSwitchChange = () => {
    setSwitchState((prev) => !prev);
  };
  const handleOptionChange = (event: any) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <Box className="Db-config">
      <Typography variant="h6" className="congfig-heading">
        Configuration
      </Typography>
      <Box className="sso-container">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch
            checked={switchState}
            onChange={handleSwitchChange}
            inputProps={{ 'aria-label': 'controlled' }}
            size="small"
            // label="Single sign in(SSO)"
          />
          <Typography variant="h4">Single sign in (SSO)</Typography>
        </Box>

        {switchState && (
          <Box>
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
          </Box>
        )}
      </Box>
      <Box className="vendor-container">
        <Typography variant="h4">HRMS System currently used by the organization</Typography>

        <RadioGroup
          row
          aria-label="options"
          name="options"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>

        {selectedOption === 'Yes' && (
          <>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: '100%' }}
              // width="50%"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select HRMS From the list"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password' // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <>
              <TextField
                id="authority"
                aria-describedby="authority"
                variant="outlined"
                required
                label="If not found in the list, please enter manually."
                className="form-control"
                sx={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
                fullWidth
              />
            </>
          </>
        )}
      </Box>
      <Box className="vendor-container">
        <Typography variant="h4">Is this organization supported by a vendor?</Typography>
        <RadioGroup
          row
          aria-label="options"
          name="options"
          value={selectedVendorOption}
          onChange={(e) => setSelectedVendorOption(e.target.value)}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        {selectedVendorOption === 'Yes' && (
          <>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: '100%' }}
              // width="50%"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a city"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password' // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </>
        )}
      </Box>
      <Box className="database-config-container">
        <Typography variant="h4">Database Configuration</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          <Autocomplete
            id="country-select-demo"
            sx={{ width: '40%' }}
            // width="50%"
            options={['mongodb', 'mongodb+srv']}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Prefix"
                inputProps={{
                  ...params.inputProps
                  //   autoComplete: 'new-password' // disable autocomplete and autofill
                }}
              />
            )}
          />
          <TextField
            id="authority"
            aria-describedby="authority"
            variant="outlined"
            required
            label="Host Name"
            className="form-control"
            sx={{ marginTop: '5px', marginBottom: '5px' }}
            fullWidth
          />
          <TextField
            id="authority"
            aria-describedby="authority"
            variant="outlined"
            required
            label="Port"
            className="form-control"
            sx={{ marginTop: '5px', marginBottom: '5px' }}
            // fullWidth
          />
        </Box>
        <TextField
          id="authority"
          aria-describedby="authority"
          variant="outlined"
          required
          label="Database Name"
          className="form-control"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          fullWidth
        />
        <TextField
          id="username"
          aria-describedby="authority"
          variant="outlined"
          required
          label="User Name"
          className="form-control"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          fullWidth
        />
        <TextField
          id="Password"
          aria-describedby="authority"
          variant="outlined"
          required
          label="Password"
          className="form-control"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          fullWidth
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">Next</Button>
      </Box>
    </Box>
  );
};
export default DBConfForm;
