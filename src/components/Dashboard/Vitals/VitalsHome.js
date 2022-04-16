import React from 'react'
import styled from 'styled-components'
import {Paper, Grid, Typography, TextField, Button} from '@material-ui/core'
// import { TextFieldsRounded } from '@material-ui/icons'
function VitalsHome() {
  const paperStyle = {width:'475px', height:'500px', margin:'50px auto', padding:20, borderRadius: 20, display: 'flex', justifyContent:'center', alignItems:'center'}
  const typoStyle = {fontFamily:'Inter'}
  const textStyle = {margin: '5px', padding:'2px'}
  const btnStyle = { backgroundColor: '#FFB703', color: 'white', margin: '20px auto'};
  return (
        <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
            <Typography variant='h4' style={typoStyle}>ENTER YOUR VITALS</Typography>
            <form>
              <TextField fullWidth label='Heart rate' placeholder='Enter your heart rate' style={textStyle}/>
              <TextField fullWidth label='Temperature' placeholder='Enter your body temperature' style={textStyle}/>
              <TextField fullWidth label='Spo2' placeholder='Enter your Oxygen Saturation' style={textStyle}/>
              <TextField fullWidth label='Blood Pressure' placeholder='Enter your Blood Pressure' style={textStyle}/>
              <TextField fullWidth label='Respiratory Rate' placeholder='Enter your Respiratory Rate' style={textStyle}/>
            </form>
            <Button type="submit" variant="contained" style={btnStyle} fullWidth>Submit</Button>
        </Grid>
        </Paper>
  )
}
// const Section = styled.section`
// // width: 50px;
// // border: 2px solid black;
// `
// const Container = styled.div`
// // width: 50px;
// // border: 2px solid red;
// `
export default VitalsHome