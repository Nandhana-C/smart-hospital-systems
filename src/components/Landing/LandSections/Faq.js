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
            Call to our HOSPER Help Desk at 9962444054
          </Accordion>
          <Accordion title="What happens once I registered?">
            The HOSPER team does a full assessment of every patient and establishes a comprehensive list of medical issues and challenges. Then fixes the appointmet with the concerned specialist on the basis of the severity of the illness
          </Accordion>
          <Accordion title="Will someone be able to access my informaion?">
            No
          </Accordion>
        </Box>
        <Box>
        <Accordion title="How secured is the patient data?">
            All data is encrypted and the system is password protected
        </Accordion>
        <Accordion title="Will it work on windows, android or ios devices">
            Yes 
        </Accordion>
        <Accordion title="Who will have access to my information?">
            All information contained in your patient file is confidential and may not be divulged to anyone beyond your treating team without your consent. 
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