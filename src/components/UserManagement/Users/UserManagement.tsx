import * as React from 'react';

import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './style.css';
import {
  Avatar,
  Button,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Switch,
  TextField,
  Typography
} from '@mui/material';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const allUsers = [
  {
    firstName: 'Shiva Kumar',
    lastName: 'K',
    title: 'Principal Software Architect',
    email: 'shivak@nhrtechnologies.com'
  },
  {
    firstName: 'Parthasarathi',
    lastName: 'Datta',
    title: 'Product Management',
    email: 'p.datta@nhrtechnologies.com'
  },
  {
    firstName: 'Swarnava',
    lastName: 'Mukherjee',
    title: 'Product Management',
    email: 'swarnava@nhrtechnologies.com'
  },
  {
    firstName: 'Hariteja',
    lastName: 'Nandipati',
    title: 'UX Design/Development',
    email: 'hariteja@nhrtechnologies.com'
  },
  {
    firstName: 'Vishnu',
    lastName: 'PV',
    title: 'Application Development',
    email: 'vishnu@nhrtechnologies.com'
  }
];

const options = ['Add User', 'Download Template', 'Import Users'];

const UserManagement = () => {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="user-mgmt-container">
        <Box sx={{ width: '25%', maxWidth: 360, bgcolor: 'background.paper', marginRight: '15px' }}>
          <div className="leftPanel-container">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <div className="left-heading">
                  <Typography variant="h6">Users</Typography>
                  <Button
                    id="add-users-btn"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ height: '2rem' }}
                    color="primary"
                    variant="contained"
                  >
                    + Add User
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button'
                    }}
                  >
                    <MenuItem onClick={handleClose}>Add Manually</MenuItem>
                    <MenuItem onClick={handleClose} disabled>
                      Import From Excel
                    </MenuItem>
                    <MenuItem onClick={handleClose} disabled>
                      Download Template
                    </MenuItem>
                  </Menu>
                </div>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  placeholder="Search Users"
                  variant="outlined"
                />
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              {allUsers?.map((user: any, index: number) => {
                return (
                  <>
                    <ListItemButton
                      key={index}
                      alignItems="flex-start"
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt={`${user.firstName} ${user.lastName}`}
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${user.firstName} ${user.lastName}`}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="caption"
                              color="text.primary"
                            >
                              {user.title}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItemButton>
                    <Divider variant="inset" component="li" key={index} />
                  </>
                );
              })}
            </List>
          </div>
        </Box>
        <Box sx={{ width: '75%', bgcolor: 'background.paper' }}>
          <div className="content-container">
            <div className="tabHeading">
              <h4>User Details: Shiva Kumar K</h4>
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ height: '2rem', marginRight: '5px' }}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ height: '2rem', marginRight: '5px' }}
                >
                  De-activate
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  disabled
                  sx={{ height: '2rem', marginRight: '5px' }}
                >
                  Save
                </Button>
              </div>
            </div>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Role Set Mappings" {...a11yProps(1)} />
              <Tab label="Preferences" {...a11yProps(2)} />
              <Tab label="Account Settings" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="tabContainer">
                <div className="formRow">
                  <Typography variant="subtitle2">Profile Picture</Typography>
                  <TextField
                    id="profilePic"
                    aria-describedby="profilePic"
                    variant="outlined"
                    required
                    type="file"
                    className="form-control"
                    sx={{ margin: '5px', width: '97%' }}
                  />
                </div>
                <div className="formRow">
                  <TextField
                    id="firstName"
                    aria-describedby="firstName"
                    variant="outlined"
                    required
                    label="First Name"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="lastName"
                    aria-describedby="lastName"
                    variant="outlined"
                    required
                    label="Last Name"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
                <div className="formRow">
                  <TextField
                    id="email"
                    aria-describedby="email"
                    variant="outlined"
                    required
                    type="email"
                    label="Email ID"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="phone"
                    aria-describedby="phone"
                    variant="outlined"
                    required
                    label="Phone/Mobile Number"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
                <div className="formRow">
                  <TextField
                    id="businessUnit"
                    aria-describedby="businessUnit"
                    variant="outlined"
                    required
                    label="Business Unit"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="function"
                    aria-describedby="function"
                    variant="outlined"
                    required
                    label="Function"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
                <div className="formRow">
                  <TextField
                    id="designation"
                    aria-describedby="designation"
                    variant="outlined"
                    required
                    label="Designation"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="roles"
                    aria-describedby="roles"
                    variant="outlined"
                    required
                    label="Role(s)"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="tabContainer">
                <div className="formRow">
                  <TextField
                    id="roleSetMemberName"
                    aria-describedby="roleSetMemberName"
                    variant="outlined"
                    required
                    label="RoleSet Member Name"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="roleSetMemberEmail"
                    aria-describedby="roleSetMemberEmail"
                    variant="outlined"
                    required
                    label="RoleSet Member Email"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="tabContainer">
                <div className="formRow">
                  <TextField
                    id="language"
                    aria-describedby="language"
                    variant="outlined"
                    required
                    label="Language"
                    className="form-control"
                    sx={{ margin: '5px' }}
                    fullWidth
                  />
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Receive Notifications/Alerts"
                    labelPlacement="start"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="tabContainer">
                <div className="formRow">
                  <TextField
                    id="oldPassword"
                    aria-describedby="oldPassword"
                    variant="outlined"
                    required
                    type="password"
                    label="Old Password"
                    className="form-control"
                    sx={{ margin: '5px', width: '97%' }}
                    fullWidth
                  />
                </div>
                <div className="formRow">
                  <TextField
                    id="newPassword"
                    aria-describedby="newPassword"
                    variant="outlined"
                    required
                    type="password"
                    label="New Password"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                  <TextField
                    id="newPasswordConfirm"
                    aria-describedby="newPasswordConfirm"
                    variant="outlined"
                    required
                    type="password"
                    label="Confirm New Password"
                    className="form-control"
                    sx={{ margin: '5px', width: '48%' }}
                    fullWidth
                  />
                </div>
                {/* <div className='formRow'>
                                    <TextField
                                        id="email"
                                        aria-describedby="email"
                                        variant="outlined"
                                        required
                                        type='email'
                                        label='Email ID'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                    <TextField
                                        id="phone"
                                        aria-describedby="phone"
                                        variant="outlined"
                                        required
                                        label='Phone/Mobile Number'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                </div>
                                <div className='formRow'>
                                    <TextField
                                        id="businessUnit"
                                        aria-describedby="businessUnit"
                                        variant="outlined"
                                        required
                                        label='Business Unit'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                    <TextField
                                        id="function"
                                        aria-describedby="function"
                                        variant="outlined"
                                        required
                                        label='Function'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                </div>
                                <div className='formRow'>
                                    <TextField
                                        id="designation"
                                        aria-describedby="designation"
                                        variant="outlined"
                                        required
                                        label='Designation'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                    <TextField
                                        id="roles"
                                        aria-describedby="roles"
                                        variant="outlined"
                                        required
                                        label='Role(s)'
                                        className='form-control'
                                        sx={{ margin: '5px', width: '48%' }}
                                        fullWidth />
                                </div> */}
              </div>
            </TabPanel>
          </div>
        </Box>
      </div>
    </>
  );
};

export default UserManagement;
