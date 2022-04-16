import styled from 'styled-components'
import React from 'react'
import { Grid, Paper, Avatar,TextField, Button, Typography } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { borderRadius } from '@mui/system';

function PatientDashHome() {
  const paperStyle = { padding: 20, height: 475 , width: 450, margin: '10px auto', borderRadius: '10px', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
  const paperStyle1 = { padding: 20, height: 475 , width: 450, margin: '10px auto', borderRadius: '10px', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}
  const avatarStyle = {backgroundColor: '#023047', height:'100px', width:'100px', margin:'10px'}
  const divStyle = {marginLeft: '100px', marginRight:'100px', display: 'block', alignItems:'center',justifyContent:'center', padding:'10px', border: '1px solid grey', borderRadius: 25}
  const headingStyle = {textAlign:'center', fontSize: 25, margin: '20px', padding: '5px'}
  const typoStyle = {margin:'5px', padding:'2px'}
  const style = {width: 400, maxWidth: 450, bgcolor: 'background.paper'}
  const listItmStyle = {paddingTop:'15px', paddingBottom: '15px'}
  
  return (
    <>
    <Section>
      <Container>
      <Box>
            <Paper elevation={10} style={paperStyle1}>
              {/* <ImgContainer>
                <img src={Doctor} alt='img' />
              </ImgContainer> */}
              <Grid align='center' style={{margin:'50px'}}>
                <Avatar style={avatarStyle}></Avatar>
                <h2 style={headingStyle}>PATIENT DETAILS</h2>
              </Grid>
              <Grid style={divStyle}>
                <Typography style={typoStyle} variant='h6'>PATIENT NAME: XYZ</Typography>
                <Typography style={typoStyle} variant='h6'>AGE: 74</Typography>
                <Typography style={typoStyle} variant='h6'>PATIENT ID: 0123</Typography>
              </Grid>
            </Paper>
        </Box>
        <Box>
            <Paper elevation={10} style={paperStyle}>
              {/* <ImgContainer>
                <img src={Paitent} alt='img' />
              </ImgContainer> */}
              <Name>
              <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button style={listItmStyle}>
        <ListItemText primary="PREVIOUS APPOINTMENT" />
      </ListItem>
      <Divider />
      <ListItem button style={listItmStyle}>
        <ListItemText primary="NEXT APPOINTMENT" />
      </ListItem>
      <Divider />
      <ListItem button divider style={listItmStyle}>
        <ListItemText primary="CURRENT MEDICATION" />
      </ListItem>
      <ListItem button style={listItmStyle}>
        <ListItemText primary="RECENT TEST REPORTS" />
      </ListItem>
      <Divider />
      <ListItem button style={listItmStyle}>
        <ListItemText primary="UPDATED MEDICATION" />
      </ListItem>
      <Divider light/>
    </List>
              </Name>
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
const ImgContainer = styled.div`
    width: 100%;
    img {
      width: 100%;
      height: 60%;
    }
`
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 20px;
  margin-left:10px;
  margin-top:15px;
  margin-bottom:15px;
`

export default PatientDashHome