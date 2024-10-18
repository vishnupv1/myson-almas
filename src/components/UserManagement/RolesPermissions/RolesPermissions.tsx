import * as React from 'react';

import { Box } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './style.css';
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';

const allRoles = [
  {
    name: 'Supervisor',
    description: 'This is a supervisor Role. It has all permissions'
  },
  {
    name: 'Manager',
    description: 'This is a manager Role. It has restricted permissions'
  },
  {
    name: 'Department Admin',
    description: 'This is a department admin Role. It has restricted permissions'
  },
  {
    name: 'Contractor',
    description: 'This is a contractor Role. It has restricted permissions'
  }
];

const allModules = [
  {
    name: 'User Management',
    permissions: [
      {
        name: 'Create User',
        isSelected: true
      },
      {
        name: 'Update User',
        isSelected: true
      },
      {
        name: 'Delete User',
        isSelected: true
      },
      {
        name: 'View User',
        isSelected: false
      },
      {
        name: 'Permission5',
        isSelected: false
      },
      {
        name: 'Permission6',
        isSelected: false
      },
      {
        name: 'Permission7',
        isSelected: false
      },
      {
        name: 'Permission8',
        isSelected: false
      },
      {
        name: 'Permission9',
        isSelected: false
      }
    ]
  },
  {
    name: 'Tenant Management',
    permissions: [
      {
        name: 'Create Tenant',
        isSelected: true
      },
      {
        name: 'Update Tenant',
        isSelected: true
      },
      {
        name: 'Delete Tenant',
        isSelected: true
      },
      {
        name: 'View Tenant',
        isSelected: false
      },
      {
        name: 'Permission5',
        isSelected: false
      },
      {
        name: 'Permission6',
        isSelected: false
      },
      {
        name: 'Permission7',
        isSelected: false
      },
      {
        name: 'Permission8',
        isSelected: false
      },
      {
        name: 'Permission9',
        isSelected: false
      }
    ]
  },
  {
    name: 'Feedback Speaks',
    permissions: [
      {
        name: 'Create Feedback',
        isSelected: true
      },
      {
        name: 'Update Feedback',
        isSelected: true
      },
      {
        name: 'Delete Feedback',
        isSelected: true
      },
      {
        name: 'View Feedback',
        isSelected: false
      },
      {
        name: 'Permission5',
        isSelected: false
      },
      {
        name: 'Permission6',
        isSelected: false
      },
      {
        name: 'Permission7',
        isSelected: false
      },
      {
        name: 'Permission8',
        isSelected: false
      },
      {
        name: 'Permission9',
        isSelected: false
      }
    ]
  }
];

const RolesPermissions = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="user-mgmt-container">
        <Box sx={{ width: '25%', maxWidth: 360, bgcolor: 'background.paper', marginRight: '15px' }}>
          <div className="leftPanel-container">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <div className="left-heading">
                  <Typography variant="h6">Roles</Typography>
                  <Button
                    id="add-roles-btn"
                    sx={{ height: '2rem' }}
                    color="primary"
                    variant="contained"
                  >
                    + Add Role
                  </Button>
                </div>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  placeholder="Search Roles"
                  variant="outlined"
                />
              </ListItem>
              <Divider variant="fullWidth" />
              {allRoles?.map((role: any, index: number) => {
                return (
                  <>
                    <ListItemButton
                      key={index}
                      alignItems="flex-start"
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemText
                        primary={`${role.name}`}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="caption"
                              color="text.primary"
                            >
                              {role.description}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItemButton>
                    <Divider variant="fullWidth" key={index} />
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
                <h4>Role: Supervisor</h4>
                <Typography variant="subtitle2">
                  This role has all permissions assigned to it.
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
            <div className="permsContainer">
              {allModules.map((module: any, index: number) => (
                <Accordion defaultExpanded key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {module.name}
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="permsPanelContainer">
                      {module?.permissions.map((permission: any) => (
                        <div className="permItem">
                          <FormControlLabel
                            value="end"
                            control={<Checkbox value={permission.isSelected} />}
                            label={permission.name}
                            labelPlacement="end"
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default RolesPermissions;
