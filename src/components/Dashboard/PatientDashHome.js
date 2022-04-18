import styled from 'styled-components'
import React from 'react'
import { Grid, Paper, Avatar,Typography } from '@material-ui/core';
import {auth} from '../../firebase';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import { borderRadius } from '@mui/system';

function PatientDashHome() {
  const logout = () => {
    auth.signOut();
  }
  const paperStyle = { padding: 20, height: 480 , width: 450, margin: '10px auto', borderRadius: '10px', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
  const paperStyle1 = { padding: 22, height: 100 , width: 300, margin: '10px auto', borderRadius: '10px', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s ease'}
  const avatarStyle = {backgroundColor: '#023047', height:'50px', width:'50px', margin:'10px'}
  const divStyle = {marginLeft: '55px', marginRight:'55px', display: 'block', alignItems:'center',justifyContent:'center', padding:'10px', border: '1px solid grey', borderRadius: 25}
  const headingStyle = {textAlign:'center', fontSize: 20, margin: '20px', padding: '5px'}
  const typoStyle = {margin:'5px', padding:'2px'}

  
  return (
    <>
    <Section>
      <Container>
      <Box>
            <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                <Avatar style={avatarStyle}></Avatar>
                <h2 style={headingStyle}>PATIENT DETAILS</h2>
              </Grid>
              <Grid style={divStyle}>
                <Typography style={typoStyle} variant='h6'>PATIENT NAME: XYZ</Typography>
                <Typography style={typoStyle} variant='h6'>AGE: 74</Typography>
                <Typography style={typoStyle} variant='h6'>PATIENT ID: 0123</Typography>
                <Typography style={typoStyle} variant='h6'>MOBILE NO: {auth.currentUser.phoneNumber}</Typography>
                <Typography style={typoStyle} variant='h6'>EMAIL: XYZ@HH.COM</Typography>
                <Typography style={typoStyle} variant='h6'>BLOOD GROUP: F+</Typography>
                <Typography style={typoStyle} variant='h6'>CURRENT MEDICATION: FENTANYL</Typography>
              </Grid>
            </Paper>
        </Box>
        <Box>
            <Paper elevation={10} style={paperStyle}>
              <Grid align='center' style={{alignItems:'center',justifyContent:'center'}}>
                <Wrap>  
                <Paper elevation={10} style={paperStyle1} >
                  <Name>Appoinments</Name>
                </Paper>
                </Wrap>
                <Wrap>
                <Paper elevation={10} style={paperStyle1} >
                  <Name>Medical Records</Name>
                </Paper>
                </Wrap>
                <Wrap>
                <Paper onClick={logout} elevation={10} style={paperStyle1} >
                  <Name>Chat with Doctor</Name>
                </Paper>
                </Wrap>
              </Grid>
            </Paper>
        </Box>
      </Container>
    </Section>
    </>
  )
}
const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 30px;
`
const Wrap = styled.div`
  transition: all 0.2s ease;
  &:hover{
      transform: scale(1.1);
  }
`
export default PatientDashHome