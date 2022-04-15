import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { Link } from "react-router-dom";

function PhnOtp() {
    const paperStyle = { padding:20, height:'70vh', width:400, margin: '20px auto', borderRadius:'50px',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }
    const avatarStyle = { backgroundColor: '#023047' }
    const btnStyle = {backgroundColor: '#FFB703', color:'white', margin:'20px auto'}
    const textStyle = {margin:'5px'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PermPhoneMsgIcon /></Avatar>
                    <h2>Verify Your Number</h2>
                </Grid>
                <TextField style={textStyle}label='UserOTP' placeholder='Enter OTP' fullWidth required />
                <Link to='/userform'>
                    <Button variant='contained' type="submit" style={btnStyle} fullWidth>Sign In</Button>
                </Link>
            </Paper>
        </Grid>
    )
}

export default PhnOtp