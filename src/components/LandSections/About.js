import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button';
import {dark} from '../../Styles/Themes';

function About() {
  return (
    <Section>
      <Container>
        <Box> <Carousel /> </Box>
        <Box>
          <Title>
            Join Us For The New Lorem
          </Title>
          <SubText>
            lorem ispum wetd hjhgdtcg vyhg tghcvncy cyhnbcytchv mvcfdyhgbv hjbdf\sj hsgbkjsfgkfv kjdfbvdb.
          </SubText>
          <SubTextLight>
            djbkjdfnhdb hkdbkfjmd vjhvbkd mnnfdhfn bmfiedf bc djfb bedmfn bdjhfb b jkdtbjbn dthb djgb dhjgev vdnvhgdfnvejv.
          </SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={dark} >
          <Button text = "JOIN NOW" link="#" />
          </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  /* color: ${props => props.theme.body}; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self:flex-start;
  margin: 0 auto;
`
const SubText = styled.p`
  font-size: ${props=> props.theme.fontmd};
  width: 80%;
  color: ${props => props.theme.body};
  align-self:flex-start;
  margin: 1rem auto;
  font-weight: 400;
`
const SubTextLight = styled.p`
  font-size: ${props=> props.theme.fontlg};
  width: 80%;
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self:flex-start;
  margin: 1rem auto;
  font-weight: 400;
`
const ButtonContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    align-self:flex-start;
    margin: 1rem auto;
`


export default About