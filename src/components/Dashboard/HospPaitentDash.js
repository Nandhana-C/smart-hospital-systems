import React from 'react';
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import HospPatientDashHead from './HospPatientDashHead';
import HospPaitentDashBar from './HospPaitentDashBar';
import HospPaitentDashHome from './HospPaitentDashHome';

function HospPaitentDash() {
  return (
    <>
    <ThemeProvider theme={light} >
    <HospPatientDashHead/>
    <HospPaitentDashBar/>
    <HospPaitentDashHome/>
    </ThemeProvider>
    </>
  )
}

export default HospPaitentDash