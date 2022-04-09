import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
function SignUp() {
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
                    <Typography variant='caption'>Create an account</Typography>
                    <form>
                        <TextField fullWidth label='Name' placeholder='Enter Your Name' style={textStyle} required/>
                        <TextField fullWidth label='Phone Number' placeholder='Enter Your Phone Number' style={textStyle}required/>
                        <TextField fullWidth label='Email' placeholder='Enter Your Email Id' style={textStyle}required/>
                        <TextField fullWidth label='Password' placeholder='Enter Your Password' style={textStyle}required/>
                        <TextField fullWidth label='Confirm Password' placeholder='Re-Enter Your Password' style={textStyle}required/>
                        <FormGroup style={formStyle}>
                    <FormControlLabel control={<Checkbox name='checked'/>} label="I accept to the terms and policies" fullWidth/>
                </FormGroup>
                <Typography style={typoStyle}>Aldready have an account?
                    <Link to='/login'>Sign In</Link>
                </Typography>
                    <Link to='/verify'>
                        <Button type="submit" variant="contained" style={btnStyle} fullWidth>Sign Up</Button>
                    </Link>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default SignUp;