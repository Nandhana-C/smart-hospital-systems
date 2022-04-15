import React , { useState, useEffect } from 'react';
import styled from 'styled-components';

function DocDashBar() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 60);
    }, []);
  return (
    <Section>
      <NavBar>
        <Name>
            Doctor ID : 696969
        </Name>
        <Name>
            Time : 
            {' '}
            {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
        &nbsp;
            {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })}
        </Name>
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
  width: 90%;
  /* height: ${props => props.theme.navHeight}; */
  height: 2.5rem;
  margin: 0 auto;
`
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`

export default DocDashBar