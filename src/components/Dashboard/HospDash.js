import React from 'react';
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import HospDashHead from './HospDashHead';
import HospDashHome from './HospDashHome';

function HospDash() {
  return (
    <>
    <ThemeProvider theme={light} >
      <HospDashHead />
      <HospDashHome/>
    </ThemeProvider>
    </>
  )
}

export default HospDash;