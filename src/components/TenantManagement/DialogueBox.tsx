import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {
  addDataToForm,
  addAutoCompleteData,
  addPocDetails,
  editPocDetails
} from '../../redux-store/actions/formdataActions';
import {
  addFormData,
  delete_Poc_Details,
  edit_Poc_Details,
  add_AutoComplete_FormData,
  add_Poc_Details
} from '../../redux-tool-kit/features/onboardFormData/onboardFormDataSlice';
import React from 'react';
import { RootState, useAppDispatch } from '../../redux-tool-kit/app/store';

{
  /* dialoguepen,handleclose,pocData,addPocData */
}
type p = {
  name: string;
  type: string;
  email: string;
  phoneNumber: string;
  designation: string;
};
type DialogueComponentProps = {
  dialogueOpen: boolean;
  handleClose: () => void;
  pocData: p;
  addPocData: () => void;
  index?: any;
};
const DialogueBox = ({
  dialogueOpen,
  handleClose,
  pocData,
  addPocData,
  index
}: DialogueComponentProps) => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;

    // Check if the input consists only of numeric characters
    if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
      addPocData(); // Call addPocData when the input is numeric
    }
  };
  //   console.log("index",index)
  return (
    <>
      <Dialog
        open={dialogueOpen}
        onClose={handleClose}
        // className="dialogue-container"
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialogue-content">
          {index == undefined ? (
            <Typography variant="h4">Add point of contact</Typography>
          ) : (
            <Typography variant="h4">update point of contact</Typography>
          )}
          {/* <Box> */}
          <TextField
            id="orgEmail"
            aria-describedby="orgEmail"
            variant="outlined"
            // type="email"
            name="name"
            required
            size="small"
            label="Employee Name"
            sx={{ marginTop: '5px', marginBottom: '5px', width: '70%' }}
            value={pocData.name}
            onChange={addPocData}
            //   fullWidth
          />
          {/* </Box> */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Typography variant="h4">select Type of POC</Typography>
            <RadioGroup
              row
              aria-label="options"
              name="type"
              value={pocData.type}
              style={{ fontSize: '30px' }}
              onChange={addPocData}
            >
              <FormControlLabel value="primary" control={<Radio />} label="Primary" />
              <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
            </RadioGroup>
          </Box>

          <Box sx={{ display: 'flex', gap: '24px' }}>
            <TextField
              id="SPC Role / Designation"
              aria-describedby="SPC Role / Designation"
              variant="outlined"
              //   type="email"
              required
              label="SPC Role / Designation"
              size="small"
              sx={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
              //   fullWidth
              name="designation"
              value={pocData.designation}
              onChange={addPocData}
            />
            <TextField
              id="SPC email address"
              aria-describedby="SPC email address"
              variant="outlined"
              type="email"
              required
              size="small"
              label="SPC email address"
              sx={{ marginTop: '5px', marginBottom: '5px' }}
              fullWidth
              name="email"
              value={pocData.email}
              onChange={addPocData}
            />
          </Box>
          <TextField
            id="orgEmail"
            aria-describedby="orgEmail"
            variant="outlined"
            type="phoneNumer"
            required
            size="small"
            label="SPC Phone number"
            sx={{ marginTop: '5px', marginBottom: '5px', width: '70%' }}
            //   fullWidth
            name="phoneNumber"
            value={pocData.phoneNumber}
            onChange={addPocData}
          />
        </DialogContent>
        <DialogActions className="dialogue-actions">
          {index == undefined ? (
            <Button
              className="dialogue-addpoc-btn"
              variant="contained"
              onClick={() => {
                dispatch(add_Poc_Details(pocData));
                handleClose();
              }}
            >
              ADD POC MEMBER
            </Button>
          ) : (
            <Button
              className="dialogue-addpoc-btn"
              variant="contained"
              onClick={() => {
                dispatch(edit_Poc_Details({ pocData, index }));
                handleClose();
              }}
            >
              Update POC MEMBER
            </Button>
          )}
          <Button className="dialogue-cancel-btn" onClick={handleClose} autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
      {/* dialogue for POC */}
    </>
  );
};

export default DialogueBox;
