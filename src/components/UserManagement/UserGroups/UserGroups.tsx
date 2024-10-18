import * as React from 'react';
import { format } from 'date-fns';

import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './style.css';
import {
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';

const allUserGroups = [
  {
    name: 'User Group1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    name: 'User Group2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    name: 'User Group3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    name: 'User Group4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
];

function createGroupMember(
  name: string,
  email: string,
  title: string,
  isAdmin: boolean,
  memberSince: Date
) {
  return { name, email, title, isAdmin, memberSince };
}

const rows = [
  createGroupMember(
    'Shiva Kumar K',
    'shivak@nhrtechnologies.com',
    'Principal Software Architect',
    true,
    new Date()
  ),
  createGroupMember(
    'Parthasarathi Datta',
    'p.datta@nhrtechnologies.com',
    'Product Management',
    false,
    new Date()
  ),
  createGroupMember(
    'Swarnava Mukherjee',
    'swarnava@nhrtechnologies.com',
    'Product Management',
    false,
    new Date()
  ),
  createGroupMember(
    'Hariteja',
    'hariteja@nhrtechnologies.com',
    'UX Design/Development',
    false,
    new Date()
  ),
  createGroupMember(
    'Vishnu PV',
    'vishnu@nhrtechnologies.com',
    'Application Development',
    false,
    new Date()
  )
];

const UserGroups = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
                  <Typography variant="subtitle1">User Groups</Typography>
                  <Button
                    id="add-users-btn"
                    sx={{ height: '2rem' }}
                    color="primary"
                    variant="contained"
                  >
                    + Add Group
                  </Button>
                </div>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  placeholder="Search UserGroups"
                  variant="outlined"
                />
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              {allUserGroups?.map((group: any, index: number) => {
                return (
                  <>
                    <ListItemButton
                      key={index}
                      alignItems="flex-start"
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemText
                        primary={`${group.name}`}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="caption"
                              color="text.primary"
                            >
                              {group.description}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItemButton>
                    <Divider variant="fullWidth" component="li" key={index} />
                  </>
                );
              })}
            </List>
          </div>
        </Box>
        <Box sx={{ width: '75%', bgcolor: 'background.paper' }}>
          <div className="content-container">
            <div className="tabHeading">
              <div>
                <h4>UserGroup Details: UserGroup1</h4>
                <Typography variant="subtitle2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Typography>
              </div>
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ height: '2rem', marginRight: '5px' }}
                >
                  Edit
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ height: '2rem', marginRight: '5px' }}
                >
                  Delete
                </Button>
              </div>
            </div>
            <Divider variant="fullWidth" />
            <div className="tableContainer">
              <TableContainer component={Paper} className="m-t-10">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Member</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Is-Admin</TableCell>
                      <TableCell>Member Since</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.email}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>
                          <span className="primaryText">{row.name}</span> <br />
                          <span className="secondaryText">{row.title}</span>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                          {row.isAdmin ? (
                            <Chip label="Admin" color="success" />
                          ) : (
                            <Chip label="Member" color="info" />
                          )}
                        </TableCell>
                        <TableCell>{format(row.memberSince, 'yyyy-MM-dd')}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default UserGroups;
