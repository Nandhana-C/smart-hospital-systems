import React, {useState} from 'react';
import {Grid, Paper, TextField, Button, FormControlLabel, FormLabel } from '@material-ui/core';
import {RadioGroup, Radio, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [prevMed, setPrevMed] = useState("");
    const [ifAny, setIfAny] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [allergies, setAllergies] = useState("");
    const [ifanyl, setifanyl] = useState("");
    const [currentMed, setCurrentMed] = useState("");
    const [attenderName, setAttenderName] = useState("");
    const [attenderAge, setAttenderAge] = useState("");
    const [attenderContact, setAttenderContact] = useState("");
    const [others, setOthers] = useState("");
    const Navigate = useNavigate();
  
    const onSubmit = (event) =>{
      event.preventDefault();
      console.log(firstName,lastName,emailAddress,mobileNumber,address,gender,dob,age,height,weight,maritalStatus,prevMed,ifAny,bloodGroup,allergies,ifanyl,currentMed,attenderName,attenderAge,attenderContact,others);
      Navigate('/Dashboard');
    };
    const paperStyle = { padding: 20, height: 'full', width: 600, margin: '20px auto', borderRadius: '20px',flexDirection: 'column' }
    const btnStyle = { backgroundColor: '#023047', color: 'white', margin: '10px auto', width: 600 }
    const headStyle = {fontFamily: 'Roboto Condensed', color:'#'}
    const radioBtn = {marginTop: '10px', marginBottom:'2px', padding:0, display:'flex', flexDirection: 'row'}
    const algBtn = {marginBottom: '2px',marginTop:'10px',padding:0, display:'flex',}
    const testBtn = {display: 'flex'}
  return (
    <form>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid>
              <h2 style={headStyle}> Fill Your Details</h2>
            </Grid>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={(event)=>setFirstName(event.target.value)}
              // defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={(event)=>setLastName(event.target.value)}
              // defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Email Address"
              label="Email Address"
              onChange={(event)=>setEmailAddress(event.target.value)}
              // defaultValue={values.emailAddress}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Mobile Number"
              label="Mobile Number"
              onChange={(event)=>setMobileNumber(event.target.value)}
              // defaultValue={values.mobileNumber}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your address"
              label="Address"
              onChange={(event)=>setAddress(event.target.value)}
              // defaultValue={values.address}
              margin="normal"
              fullWidth
              required
            />
            <div style={testBtn}>
              <FormLabel placeholder='gender' fullwidth required style={radioBtn}>Gender: </FormLabel>
              <RadioGroup row aria-label="gender" name="gender1" onChange={(event)=>setGender(event.target.value)}>
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </div>

            <Stack component="form" noValidate spacing={3}>
              <TextField
                label="Date of Birth"
                type="date"
                defaultValue="DD-MM-YYYY"
                margin='normal'
                onChange={(event)=>setDob(event.target.value)}
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
              onChange={(event)=>setAge(event.target.value)}
              // defaultValue={values.age}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Height"
              label="Height"
              onChange={(event)=>setHeight(event.target.value)}
              // defaultValue={values.height}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Enter Your Weight"
              label="Weight"
              onChange={(event)=>setWeight(event.target.value)}
              // defaultValue={values.weight}
              margin="normal"
              fullWidth
              required
            />
            <div style={testBtn}>
            <FormLabel placeholder='Marital Status' fullwidth required style={radioBtn}>Marital Status</FormLabel>
            <RadioGroup row aria-label="maritalStatus" name="ms" onChange={(event)=>setMaritalStatus(event.target.value)}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>
            <div style={testBtn}>
            <FormLabel placeholder='pm' fullwidth required style={radioBtn}>Previous Medical History</FormLabel>
            <RadioGroup row aria-label="pm" name="pm1" onChange={(event)=>setPrevMed(event.target.value)}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>
            <TextField
              placeholder="Mention the history"
              label="If any"
              onChange={(event)=>setIfAny(event.target.value)}
              // defaultValue={values.ifAny}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Blood Group"
              label="Blood Group"
              onChange={(event)=>setBloodGroup(event.target.value)}
              // defaultValue={values.bloodGroup}
              margin="normal"
              fullWidth
              required
            />
            <div style={testBtn}>
            <FormLabel placeholder='al' fullwidth required style={algBtn}>Allergies</FormLabel>
            <RadioGroup row aria-label="al" name="al" onChange={(event)=>setAllergies(event.target.value)}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>
            <TextField
              placeholder="If any"
              label="If any"
              onChange={(event)=>setifanyl(event.target.value)}
              // defaultValue={values.ifAnyl}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Current Medication"
              label="Current Medication"
              onChange={(event)=>setCurrentMed(event.target.value)}
              // defaultValue={values.currentMedication}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Name"
              label="Attender Name"
              onChange={(event)=>setAttenderName(event.target.value)}
              // defaultValue={values.attenderName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Age"
              label="Attender Age"
              onChange={(event)=>setAttenderAge(event.target.value)}
              // defaultValue={values.attenderAge}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Attender Contact"
              label="Attender Contact"
              onChange={(event)=>setAttenderContact(event.target.value)}
              // defaultValue={values.attenderContact}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Others"
              label="Others"
              onChange={(event)=>setOthers(event.target.value)}
              // defaultValue={values.others}
              margin="normal"
              fullWidth
              required
            />
            <Button
              color="secondary"
              variant="contained"
              onSubmit={onSubmit}
              style = {btnStyle}
            >SUBMIT</Button>
          </Paper>
      </Grid>
    </form> 
  )
}


export default UserForm