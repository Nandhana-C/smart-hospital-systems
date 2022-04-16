import React from 'react';
import { ThemeProvider } from 'styled-components';
import {light} from '../../../Styles/Themes';
import HospPatientDashHead from '../HospPatientDashHead';
import HospPaitentDashBar from '../HospPaitentDashBar';
import VitalsHome from './VitalsHome';

function Vitals() {
  return (
    <>
    <ThemeProvider theme={light}>
    <HospPatientDashHead/>
    <HospPaitentDashBar/>
    <VitalsHome/>
    </ThemeProvider>
    </>
  )
}

export default Vitals