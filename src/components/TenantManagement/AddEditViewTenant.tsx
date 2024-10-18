import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './style.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux-tool-kit/app/store';
import { setData } from '../../redux-tool-kit/features/local/localSlice';
// import upload from '../../assets/upload.png';
// tablee...
import save from '../../assets/save.svg';
// import upload1 from '../../assets/upload.png';
import Edit from '../../assets/edit.svg';
// import form-components
import BasicDetailForm from './BasicDetailForm';
import DBConfForm from './DBConfForm';
import IDPForm from './IDPForm';

export const AddEditViewTenant = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const [mode, setMode] = React.useState('CREATE_MODE');
  // const [name, setName] = React.useState('');
  const initialState = {
    name: '',
    description: ''
  };

  // getting the event handlers from our custom hook
  const { onSubmit } = useForm(loginUserCallback, initialState);

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    // send "values" to database
  }

  React.useEffect(() => {
    if (location?.state?.mode) {
      setMode(location.state.mode);
    } else {
      setMode('CREATE_MODE');
    }
    dispatch(setData(window.location.pathname));

    // setMode(location.state.mode);
  }, []);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  const SubscriptionsForm = () => <></>;
  const PreferencesForm = () => <></>;

  return (
    <>
      <Box sx={{ padding: '24px' }}>
        <form onSubmit={onSubmit}>
          <div className="head">
            {mode === 'CREATE_MODE' ? (
              <Typography variant="h3" className="main-heading">
                Organization onboard form
              </Typography>
            ) : (
              <Typography variant="h6">Tenant: TenantA</Typography>
            )}
            <Box sx={{ display: 'flex', gap: '15px' }}>
              <button
                className="braft-btn"
                style={{
                  borderRadius: '20px 2px 35px 20px',
                  width: '102px'
                }}
                // variant="contained"
                // color="primary"
                type="submit"
              >
                Save
              </button>
              {/* <Box
                className="edit-btn"
                sx={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                <img src={Edit} alt="edit" className="edit-img"></img>

                <button
                  style={{ border: 'none', padding: '5px', background: 'none' }}
                  type="submit">
                  EDIT
                </button>
              </Box> */}
              {/* <Box
                className="save-btn"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  justifyContent: 'space-evenly'
                }}>
                <img src={save} alt="save-as-draft" />
                <button
                  type="submit"
                  style={{ border: 'none', padding: '5px', background: 'none', color: 'white' }}>
                  SAVE AS DRAFT
                </button>
              </Box> */}
            </Box>
          </div>
          <div className="tenant-form">
            <Box
              sx={{
                width: '20%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                marginRight: '10px'
              }}
            >
              <div className="form-sections">
                <List
                  component="nav"
                  sx={{ margin: '0px', padding: '0px' }}
                  aria-label="tenant-form"
                  className="tenant-section-list"
                >
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText primary="BASIC INFO" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="CONFIGURATIONS" />
                  </ListItemButton>
                  <ListItemButton
                    disabled
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="SUBSCRIPTION INFO" />
                  </ListItemButton>
                  {/* <ListItemButton
                    disabled
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}>
                    <ListItemText primary="Subscriptions & Billing" />
                  </ListItemButton>
                  <ListItemButton
                    disabled
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <ListItemText primary="Preferences" />
                  </ListItemButton> */}
                </List>
              </div>
            </Box>
            <Box sx={{ width: '80%', bgcolor: 'background.paper' }}>
              <PerfectScrollbar>
                <div className="form-container">
                  {selectedIndex === 1 ? <BasicDetailForm /> : ''}
                  {selectedIndex === 2 ? <DBConfForm /> : ''}
                  {selectedIndex === 3 ? <SubscriptionsForm /> : ''}
                  {/* {selectedIndex === 4 ? <SubscriptionsForm /> : ''}
                  {selectedIndex === 5 ? <PreferencesForm /> : ''} */}
                </div>
              </PerfectScrollbar>
            </Box>
          </div>
        </form>
      </Box>
    </>
  );
};
