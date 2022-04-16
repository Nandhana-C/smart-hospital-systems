import React from 'react'
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import PatientDashHead from './PatientDashHead';
import PatientDashHome from './PatientDashHome';

function PatientDash() {
  return (
    <>
    <ThemeProvider theme={light}>
    <PatientDashHead/>
    <PatientDashHome/>
    </ThemeProvider>
    </>
  )
}

export default PatientDash