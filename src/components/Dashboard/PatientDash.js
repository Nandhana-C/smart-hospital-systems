import React from 'react'
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import PatientDashHead from './PatientDashHead';
import PatientDashHome from './PatientDashHome';

function PatientDash(props) {
  return (
    <>
    <ThemeProvider theme={light}>
    <PatientDashHead/>
    <PatientDashHome asset = {props}/>
    </ThemeProvider>
    </>
  )
}

export default PatientDash