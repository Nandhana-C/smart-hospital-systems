import React from 'react'
import { ThemeProvider } from 'styled-components';
import {light} from '../../Styles/Themes';
import Navigation from './Navigation';
import Home from './LandSections/Home';
import About from './LandSections/About';
import Services from './LandSections/Services';
import Faq from './LandSections/Faq';
import Footer from './Footer';
function Landing() {
    
  return (
    <>
    <ThemeProvider theme={light} >
      <Navigation />
      <Home />
      <About />
      <Services />
      <Faq/>
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default Landing