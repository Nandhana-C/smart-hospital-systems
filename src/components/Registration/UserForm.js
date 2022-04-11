import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

function UserForm() {
    const paperStyle = { padding: 20, height: 'full', width: 600, margin: '20px auto', borderRadius: '50px' };
    const btnStyle = { backgroundColor: '#023047', color: 'white', margin: '10px auto', width: 600 };
    const headStyle = {fontFamily: 'Roboto Condensed', color:'#'};
    const radioBtn = {margin:'auto'};
    const { values, handleChange } = this.props;
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <>
            <Grid>
              <h2 style={headStyle}> Fill Your Details</h2>
            </Grid>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Email Address"
              label="Email Address"
              onChange={handleChange('emailAddress')}
              defaultValue={values.emailAddress}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Mobile Number"
              label="Mobile Number"
              onChange={handleChange('mobileNumber')}
              defaultValue={values.mobileNumber}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
              required
            />
            <FormLabel placeholder='gender' fullwidth required style={radioBtn}>Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange('gender')}>
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                label="Date of Birth"
                type="date"
                defaultValue="DD-MM-YYYY"
                margin='normal'
                onChange={handleChange('dob')}
                fullWidth
                required
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <TextField
              placeholder="Enter Your Age"
              label="Age"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Height"
              label="Height"
              onChange={handleChange('height')}
              defaultValue={values.height}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Weight"
              label="Weight"
              onChange={handleChange('weight')}
              defaultValue={values.weight}
              margin="normal"
              fullWidth
              required
            />
            <FormLabel placeholder='Marital Status' fullwidth required>Marital Status</FormLabel>
            <RadioGroup aria-label="maritalStatus" name="ms" onChange={handleChange('maritalStatus')}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <FormLabel placeholder='pm' fullwidth required>Previous Medical History</FormLabel>
            <RadioGroup aria-label="pm" name="pm1" onChange={handleChange('previousMedical')}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <TextField
              placeholder="Mention the history"
              label="If any"
              onChange={handleChange('ifAny')}
              defaultValue={values.ifAny}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Blood Group"
              label="Blood Group"
              onChange={handleChange('bloodGroup')}
              defaultValue={values.bloodGroup}
              margin="normal"
              fullWidth
              required
            />
            <FormLabel placeholder='al' fullwidth required>Allergies</FormLabel>
            <RadioGroup aria-label="al" name="al" onChange={handleChange('allergies')}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <TextField
              placeholder="If any"
              label="If any"
              onChange={handleChange('ifAnyl')}
              defaultValue={values.ifAnyl}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Current Medication"
              label="Current Medication"
              onChange={handleChange('currentMedication')}
              defaultValue={values.currentMedication}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Name"
              label="Attender Name"
              onChange={handleChange('attenderName')}
              defaultValue={values.attenderName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Age"
              label="Attender Age"
              onChange={handleChange('attenderAge')}
              defaultValue={values.attenderAge}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Contact"
              label="Attender Contact"
              onChange={handleChange('atenderContact')}
              defaultValue={values.attenderContact}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Others"
              label="Others"
              onChange={handleChange('others')}
              defaultValue={values.others}
              margin="normal"
              fullWidth
              required
            />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={btnStyle}
            >Continue</Button>
          </>
        </Paper>
      </Grid>
  )
}

export default UserForm