import Box from '@mui/material/Box';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TableContainer,
  TextField,
  Typography
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// icon
import MoreVertIcon from '@mui/icons-material/MoreVert';
import upload1 from '../../assets/upload.png';
import React from 'react';
import Edit from '../../assets/edit.svg';
import { Country, State, City } from 'country-state-city';
import { useSelector } from 'react-redux';
import {
  addDataToForm,
  addAutoCompleteData,
  addPocDetails,
  deletePocDetails
} from '../../redux-store/actions/formdataActions';
// redux-toolkit .....
import {
  addFormData,
  delete_Poc_Details,
  edit_Poc_Details,
  add_AutoComplete_FormData,
  add_Poc_Details
} from '../../redux-tool-kit/features/onboardFormData/onboardFormDataSlice';
import { styled } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DialogueBox from './DialogueBox';
const StyledTextField = styled(TextField)({
  borderRadius: 100,
  border: 'none'
  // Set border-radius to 0 for no rounded corners
  // Add any other custom styles if needed
});
const industrySectors: string[] = [
  'Information Technology (IT)',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Finance and Banking',
  'Hospitality',
  'Education',
  'Government',
  'Professional Services',
  'Transportation and Logistics'
];
import { fetchposts } from '../../redux-tool-kit/features/getRequest/getRequestSlice';
import { RootState, useAppDispatch } from '../../redux-tool-kit/app/store';
import { createTenant } from '../../redux-tool-kit/features/postRequest/createTenantSlice';
// import { UseSelector } from 'react-redux';
const BasicDetailForm = () => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  //   const basicData = useSelector((state: any) => state.formdata);

  const basicData: any = useSelector((state: RootState) => state.basicData);
  let fetchedData = useSelector((state: RootState) => state.getRequest);
  let postData = useSelector((state: RootState) => state.postRequest);

  console.log(postData, 'fetchedd data');
  const [inputValue, setInputValue] = React.useState('');
  const [country, setCountry] = React.useState<any>(
    localStorage.getItem('country') ? localStorage.getItem('country') : ''
  );
  const [state, setState] = React.useState<any>(
    localStorage.getItem('state') ? localStorage.getItem('state') : ''
  );

  //   console.log('country', country);
  //   console.log('state', state);
  const [pocData, setPocData] = React.useState({
    name: '',
    type: '',
    email: '',
    phoneNumber: '',
    designation: ''
  });
  const addPocData = (e?: any) => {
    setPocData({ ...pocData, [e.target.name]: e.target.value });
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    dispatch(addFormData({ [name]: value }));
  };
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const [editDialogueOpen, setEditDialogueOpen] = React.useState(false);
  const handleClickOpen = () => {
    setDialogueOpen(true);
  };
  const handleClose = () => {
    setDialogueOpen(false);
    setPocData({
      name: '',
      type: '',
      email: '',
      phoneNumber: '',
      designation: ''
    });
  };
  //   menu for eidting Poc
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openPocMenu = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  //  editing poc data
  const handleEditPoc = (e: any, item: any) => {
    setEditDialogueOpen(true);
    setAnchorEl(null);
    setPocData({ ...item });
  };
  const handleDeletePoc = () => {
    setAnchorEl(null);
  };
  const handleEditClose = () => {
    setEditDialogueOpen(false);
  };
  React.useEffect(() => {
    // basicData.filter(x=>)
    let key: any = Object.keys(basicData);
    // console.log(key)
    let c: number = 0;
    key.forEach((item: any) => {
      if (typeof basicData[item] == 'string' ? basicData?.item !== '' : false) {
        c++;
      }
    });
    if (c > 1) {
      dispatch(fetchposts());
      dispatch(createTenant(basicData));
    }
  }, [basicData]);
  //   console.log('basicData',state);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h6">Basic Details</Typography>
      <Box>
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box className="upload-img">
            <img src={upload1} alt="uplaod-img"></img>
            <Typography variant="h6" sx={{ opacity: '0.5', fontSize: '10px' }}>
              Add{' '}
            </Typography>
            <Typography variant="h6" sx={{ opacity: '0.5', fontSize: '10px' }}>
              Organization's Logo{' '}
            </Typography>
            <Typography variant="h6" sx={{ opacity: '0.5', fontSize: '10px' }}>
              Size: 200px X 200px{' '}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <TextField
              id="tenantName"
              aria-describedby="name"
              name="tenantName"
              //   placeholder="Edit Me"
              variant="outlined"
              required
              label="Organization Name"
              className="form-control"
              sx={{ marginTop: '5px', marginBottom: '5px' }}
              fullWidth
              onChange={handleChange}
              //   size="small"
              value={basicData.tenantName}
            />
            <Box>
              <TextField
                id="domain"
                aria-describedby="domain"
                variant="outlined"
                required
                label="Domain Name"
                name="domainName"
                value={basicData.domainName}
                onChange={handleChange}
                sx={{ marginTop: '5px', marginBottom: '5px' }}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <TextField
          id="domain"
          aria-describedby="domain"
          variant="outlined"
          required
          label="Desired Domain URL"
          name="domainUrl"
          value={basicData.domainUrl}
          onChange={handleChange}
          //   size="small"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          fullWidth
        />
        <StyledTextField
          id="domai"
          //   aria-describedby="domain"
          //   variant="outlined"
          //   required
          defaultValue={'elix9.com'}
          // label="Domain"
          className="elix-text"
          sx={{ marginTop: '5px', marginBottom: '5px', border: 'none' }}
          disabled
        />
      </Box>
      <Box>
        <TextField
          id="orgType"
          aria-describedby="orgType"
          variant="outlined"
          required
          //   defaultValue={'ConsultantOrg'}
          label="Organization Primary Address"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          name="primaryAddress"
          multiline={true}
          value={basicData.primaryAddress}
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Autocomplete
          id="industry-sectors"
          options={industrySectors}
          value={basicData.industry}
          //   name="industry"
          onChange={(e, g) => {
            console.log(g, 'redux checking');
            dispatch(add_AutoComplete_FormData(['industry', g]));
          }}
          sx={{ width: '48.3%' }}
          renderInput={(params: any) => (
            <TextField
              name="industry"
              {...params}
              label="Select Industry Sector"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password'
              }}
              onChange={(e) => console.log(e.target.name, e.target.value, 'redux checking')}
            />
          )}
        />
        <TextField
          id="description"
          name="organizationHeadCount"
          aria-describedby="description"
          variant="outlined"
          label="Overall Head Count"
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          // fullWidth
          //   defaultValue={100}
          onChange={(e) => {
            // console.log((/^[0-9]*$/.test(e.target.value)))
            if (/^[0-9]*$/.test(e.target.value)) {
              handleChange(e);
            }
          }}
          value={basicData.organizationHeadCount}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '50%' }}
          options={Country.getAllCountries()}
          autoHighlight
          getOptionLabel={(option: any) => (option.name ? option.name : option)}
          isOptionEqualToValue={(option, value) => option.name == value}
          value={basicData.country}
          onChange={(event, newValue) => {
            //   setBasicData({...basicData,"country":newValue?.name?newValue?.name:""})
            dispatch(add_AutoComplete_FormData(['country', newValue?.name]));
            setCountry(newValue?.isoCode);
            localStorage.setItem('country', newValue?.isoCode);
          }}
          //   value={basicData?.country || "fgh "}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.isoCode.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.isoCode.toLowerCase()}.png`}
                alt=""
              />
              {option.name} + {option.phonecode}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              name="country"
              label="Country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password' // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '50%' }}
          // width="50%"
          options={
            country !== ''
              ? State.getAllStates().filter((state) => state.countryCode == country)
              : []
          }
          autoHighlight
          //   multiple
          value={basicData.province}
          getOptionLabel={(option: any) => (option.name ? option.name : option)}
          onChange={(event, newValue) => {
            // setBasicData({...basicData,"province":newValue?.name?newValue?.name:""})
            dispatch(add_AutoComplete_FormData(['province', newValue?.name]));
            setState(newValue?.isoCode);
            localStorage.setItem('state', newValue?.isoCode);
          }}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Provinces"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password' // disable autocomplete and autofill
              }}
              value={basicData?.province}
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '48.3%' }}
          // width="50%"
          options={state ? City.getAllCities().filter((c) => c?.stateCode == state) : []}
          autoHighlight
          getOptionLabel={(option: any) => (option.name ? option.name : option)}
          value={basicData.city}
          onChange={(event, newValue) =>
            dispatch(add_AutoComplete_FormData(['city', newValue?.name]))
          }
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              required
              {...params}
              label="City"
              inputProps={{
                ...params.inputProps
                // autoComplete: 'new-password' // disable autocomplete and autofill
              }}
              //   onChange={(e:any,n:any)=>console.log(n)}
              fullWidth
            />
          )}
        />

        <TextField
          id="description"
          aria-describedby="description"
          variant="outlined"
          label="Zip / PinCode"
          value={basicData.zipcode}
          name="zipcode"
          onChange={handleChange}
          sx={{ marginTop: '5px', marginBottom: '5px' }}
          //   fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', gap: '24px' }}>
        <TextField
          id="orgEmail"
          aria-describedby="orgEmail"
          variant="outlined"
          type="email"
          required
          label="Organization Email"
          name="orgEmail"
          value={basicData.orgEmail}
          onChange={handleChange}
          sx={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
          //   fullWidth
        />
        <TextField
          id="orgPhone"
          aria-describedby="orgPhone"
          variant="outlined"
          required
          label="Organization Phone Number"
          name="orgPhoneNumber"
          value={basicData.orgPhoneNumber}
          onChange={handleChange}
          InputProps={{
            startAdornment: inputValue && (
              <InputAdornment position="start"> + {country?.phone || 'code'} | </InputAdornment>
            )
          }}
          sx={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
          //   fullWidth
        />
      </Box>
      <Box>
        <Typography variant="h4">Point of Contact (POC) Employee</Typography>
        <TableContainer component={Paper} className="m-t-10">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{ background: 'var(--Primary-Light, #F8F2FF)', padding: '0px', margin: '0px' }}>
              <TableRow sx={{ padding: '2px', margin: '0px' }}>
                <TableCell className="table-cell-column">EMPLOYEE NAME</TableCell>
                {/* <TableCell className="table-cell-column">EMPLOYEE EMAIL</TableCell> */}
                <TableCell className="table-cell-column">TYPE OF POC</TableCell>
                <TableCell className="table-cell-column">DESIGNATION</TableCell>
                <TableCell className="table-cell-column">PHONE NUMBER</TableCell>
                <TableCell className="table-cell-column">MORE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basicData.pointOfContacts.map((item: any, i: number) => (
                <TableRow
                  key={i}
                  sx={{
                    background: 'var(--Gray-50, #FAFAFA)',
                    border: '1px solid var(--Gray-200, #EEE)'
                  }}>
                  <TableCell className="table-cell">
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Box sx={{ backgroundColor: 'black' }}>p</Box>
                      <Box>
                        <p>{item.name}</p>
                        <p style={{ opacity: '0.7' }}>{item.email}</p>
                      </Box>
                    </Box>
                  </TableCell>
                  {/* <TableCell className="table-cell">{item.phoneNumber}</TableCell> */}
                  <TableCell className="table-cell">{item.type}</TableCell>
                  <TableCell className="table-cell">{item.designation}</TableCell>
                  <TableCell className="table-cell">{item.phoneNumber}</TableCell>
                  <TableCell className="table-cell">
                    <IconButton
                      id="basic-button"
                      aria-controls={openPocMenu ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openPocMenu ? 'true' : undefined}
                      onClick={handleMenu}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openPocMenu}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button'
                      }}>
                      <MenuItem onClick={(e) => handleEditPoc(e, item)}>Edit</MenuItem>
                      <MenuItem
                        onClick={() => {
                          console.log(i);
                          dispatch(delete_Poc_Details(i));
                          setAnchorEl(null);
                        }}>
                        Delete
                      </MenuItem>
                      {/* <MenuItem onClick={handleMenuClose}>Logout</MenuItem> */}
                    </Menu>
                    {editDialogueOpen && (
                      <DialogueBox
                        dialogueOpen={editDialogueOpen}
                        handleClose={handleEditClose}
                        pocData={pocData}
                        addPocData={addPocData}
                        index={i}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '10px'
          }}>
          <Box className="add-poc">
            {/* <IconButton> */}
            {/* <EditIcon /> */}
            {/* </IconButton> */}
            <img src={Edit} alt="" className="edit-img" />
            <button
              onClick={() => setDialogueOpen(true)}
              style={{ color: 'black', padding: '0px', margin: '0px', border: 'none' }}>
              ADD POINT OF CONTACT
            </button>
          </Box>
          {/* dialoguepen,handleclose,pocData,addPocData */}
          {dialogueOpen && (
            <DialogueBox
              dialogueOpen={dialogueOpen}
              handleClose={handleClose}
              pocData={pocData}
              addPocData={addPocData}
            />
          )}

          {/* dialogue for POC */}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">Next</Button>
      </Box>
    </Box>
  );
};
export default BasicDetailForm;
