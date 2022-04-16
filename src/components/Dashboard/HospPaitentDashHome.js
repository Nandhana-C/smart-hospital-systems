import React from 'react';
import styled from 'styled-components';
import Vitals from '../../assets/Vitals.png';
import Diagnosis from '../../assets/Diagnosis.png';
import Paper from '@material-ui/core/Paper';
import { useNavigate } from 'react-router-dom';

function HospPaitentDashHome() {
    const paperStyle = { padding: 20, height: 325 , width: 325, margin: '20px auto', borderRadius: '10px', backgroundColor: '#FFB703', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',cursor:'pointer', textAlign: 'center' }
    const Navigate = useNavigate();
    const vitalClick = () => {
      Navigate('/Vitals');
    } 
    const diagnoClick = () => {
      Navigate('/Diagnosis');
    } 
  return (
    <Section>
      <Container>
        <Box>
            <Paper onClick={vitalClick} elevation={10} style={paperStyle}>
              <ImgContainer>
                <img src={Vitals} alt='img' />
              </ImgContainer>
              <Name>Vitals Checkup</Name>
            </Paper>
        </Box>
        <Box>
            <Paper onClick={diagnoClick} elevation={10} style={paperStyle}>
              <ImgContainer>
                <img src={Diagnosis} alt='img' />
              </ImgContainer>
              <Name1>Pre-Diagnosis</Name1>
            </Paper>
        </Box>
      </Container>
    </Section>
  )
}
const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
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
  transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const ImgContainer = styled.div`
    width: 100%;
    img {
      width: 100%;
      height: 60%;
    }
`
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 20px auto;
  margin-left:40px;
`
const Name1 = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 20px auto;
  margin-left: 40px;
`
export default HospPaitentDashHome