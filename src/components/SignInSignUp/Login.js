import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";


function LogIn() {
    const paperStyle = { padding:20, height:'70vh', width:400, margin: '20px auto', borderRadius:'50px' }
    const avatarStyle = { backgroundColor: '#023047' }
    const btnStyle = {backgroundColor: '#FFB703', color:'white', margin:'20px auto'}
    // const linkStyle = {margin:'2px', padding:'2px', textAlign:'center', justifyContent:'center'}
    const typoStyle = {margin:'15px', padding:'5px', textAlign:'center'}
    const textStyle = {margin:'5px'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><ExitToAppIcon /></Avatar>
                    <h2>Sign In</h2>
                    <Typography variant='caption'>Login to Your Account</Typography>
                </Grid>
                <TextField style={textStyle}label='Enter Username' placeholder='Username' fullWidth required />
                <TextField style={textStyle} label='Enter Password' placeholder='Password' type='Password' fullWidth required />
                <Link to='/'>
                    <Button variant='contained' type="submit" style={btnStyle} fullWidth>Sign In</Button>
                </Link>
                <Typography style={typoStyle}>
                    <Link to='/'>Forgot Password?</Link>
                </Typography>
                <Typography style={typoStyle}>Don't have an account?
                    <Link to='/'>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default LogIn;