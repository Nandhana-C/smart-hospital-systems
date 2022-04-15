import React from 'react';
import styled from 'styled-components';
import Logo from '../Landing/Logo';
import Button from '../Landing/Button';

function HospDashHead() {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Name>
            SRM Hospital
        </Name>
        <Button text="Account" link="#" />
      </NavBar>
    </Section>
  )
}

const Section = styled.section`
  width:100vw;
  background-color: ${props => props.theme.body}; 
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 900;
`

export default HospDashHead