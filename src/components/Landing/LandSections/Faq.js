import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

function Faq() {
  return (
    <Section>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="Where do I call for Information on HOSPER">
            CALL TO OUR HOSPER HELP DESK AT 9962444054.
          </Accordion>
          <Accordion title="What happens once I registered?">
            THE HOSPER TEAM DOES A FULL ASSESSMENT OF EVERY PATIENT AND ESTABLISHES A COMPREHENSIVE LIST OF MEDICAL ISSUES AND CHALLENGES. THEN FIXES THE APPOINTMENT WITH THE CONCERNED SPECIALIST ON THE BASIS OF THE SEVERITY OF THE ILLNESS.
          </Accordion>
          <Accordion title="Will someone be able to access my information?">
            NO
          </Accordion>
        </Box>
        <Box>
        <Accordion title="How secured is the patient data?">
            ALL DATA IS ENCRYPTED AND THE SYSTEM IS PASSWORD PROTECTED
        </Accordion>
        <Accordion title="Will it work on windows, android or ios devices">
            YES
        </Accordion>
        <Accordion title="Who will have access to my information?"> 
            ALL INFORMATION CONTAINED IN YOUR PATIENT FILE IS CONFIDENTIAL AND MAY NOT BE DIVULGED TO ANYONE BEYOND YOUR TREATING TEAM WITHOUT YOUR CONSENT.
        </Accordion>
        </Box>
      </Container>
    </Section>
  )
}
const Section = styled.section`
  min-height: 100vh;
  height: 
  width: 100vw;
  background-color: ${props => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size=${(props) => props.theme.fontxxl};
  /* font-size= 4rem; */
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Box = styled.div`
  width: 45%;
`

export default Faq