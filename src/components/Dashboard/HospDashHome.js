import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Doctor from '../../assets/Doctor.png';
import Paitent from '../../assets/Paitent.png';
import { useNavigate } from 'react-router-dom';

function HospDashHome() {
    const paperStyle = { padding: 20, height: 325 , width: 325, margin: '20px auto', borderRadius: '10px', backgroundColor: '#FFB703', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
    const Navigate = useNavigate();
    const docClick = () => {
      Navigate('/DoctorDash');
    } 
    const PaitentClick = () => {
      Navigate('/PaitentDash');
    } 
  return (
    <Section>
      <Container>
        <Box>
            <Paper onClick={docClick} elevation={10} style={paperStyle}>
              <ImgContainer>
                <img src={Doctor} alt='img' />
              </ImgContainer>
              <Name>
                Doctor's Dashboard
              </Name>
            </Paper>
        </Box>
        <Box>
            <Paper onClick={PaitentClick} elevation={10} style={paperStyle}>
              <ImgContainer>
                <img src={Paitent} alt='img' />
              </ImgContainer>
              <Name>
                Paitent's Dashboard
              </Name>
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
  padding: 20px;
  margin-left:20px;
`
export default HospDashHome