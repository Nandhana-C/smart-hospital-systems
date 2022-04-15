import React from 'react';
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import DocDashHead from './DocDashHead';
import DocDashBar from './DocDashBar';
import DocDashHome from './DocDashHome';

function DocDash() {
  return (
    <>
    <ThemeProvider theme={light} >
      <DocDashHead />
      <DocDashBar/>
      <DocDashHome />
    </ThemeProvider>
    </>
  )
}

export default DocDash