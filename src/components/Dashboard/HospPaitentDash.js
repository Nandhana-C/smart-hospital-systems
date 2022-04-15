import React from 'react'
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import HospPatientDashHead from './HospPatientDashHead';

function HospPaitentDash() {
  return (
    <>
    <ThemeProvider theme={light} >
    <HospPatientDashHead/>
    </ThemeProvider>
    </>
  )
}

export default HospPaitentDash