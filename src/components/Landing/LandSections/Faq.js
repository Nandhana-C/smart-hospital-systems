import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

function Faq() {
  return (
    <Section>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
          </Accordion>
          <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
          </Accordion>
          <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
          </Accordion>
        </Box>
        <Box>
        <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
        </Accordion>
        <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
        </Accordion>
        <Accordion title="This is a question answer is below">
            lorem bullshit loremchjsjbv  hsbv  jhbv  hj v dbvbv jsbdv  f kbfbv dx 
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