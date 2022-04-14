import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";


function HospSignup() {
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto', borderRadius:'50px'};
    const avatarStyle = { backgroundColor: '#023047' };
    const headerStyle = { margin: 0 };
    const btnStyle = { backgroundColor: '#FFB703', color: 'white', margin: '10px auto' };
    // const marginTop = { margin: 5 }
    const typoStyle = {margin:'10px', padding:'5px', textAlign:'left'};
    const formStyle = {margin:'2px', padding:'5px'};
    const textStyle = {margin:'5px', padding:'2px'};

  return (
    <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><PersonAddIcon /></Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption'>Register Your Hospital</Typography>
                <form>
                    <TextField fullWidth label='Hospital Name' placeholder='Enter Name of Your Hospital' style={textStyle} required/>
                    <TextField fullWidth label='Username' placeholder='Enter a UserName' style={textStyle} required/>
                    <TextField fullWidth label='Password' placeholder='Enter Your Password' style={textStyle}required/>
                    <TextField fullWidth label='Confirm Password' placeholder='Re-Enter Your Password' style={textStyle}required/>
                    <FormGroup style={formStyle}>
                <FormControlLabel control={<Checkbox name='checked'/>} label="I accept to the terms and policies" fullWidth/>
            </FormGroup>
            <Typography style={typoStyle}>Aldready Registered?
                <Link to='/HospLogin'>Sign In</Link>
            </Typography>
                <Link to='/Hospital'>
                    <Button type="submit" variant="contained" style={btnStyle} fullWidth>Register</Button>
                </Link>
                </form>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default HospSignup