import React, { useState } from 'react';
import styled from 'styled-components';
import Doctor from '../../assets/Doctor.png';
import Paitent from '../../assets/Paitent.png';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

function HospDashHome() {
    const paperStyle = { padding: 20, height: 325 , width: 325, margin: '20px auto', borderRadius: '10px', backgroundColor: '#FFB703', color:'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',cursor:'pointer' }
    const btnStyle = {backgroundColor: '#FFB703', color:'white', margin:'20px 10px'}
    const textStyle = {margin:'5px'}
    const [docId, setDocId] = useState("");
    const [patientId, setPatientId] = useState("");
    const Navigate = useNavigate();
    const docClick = () => {
      Navigate('/DoctorDash');
    } 
    const PaitentClick = () => {
      Navigate('/PaitentDash');
    } 
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen1, setIsOpen1] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
    function openModal1() {
      setIsOpen1(true);
    }

    function closeModal1() {
      setIsOpen1(false);
    }
  return (
    <Section>
      <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Doc Modal"
      >
        <ModalBox>
          <Grid align='center'>
              <h2>Select a Doctor</h2>
          </Grid>
          <TextField style={textStyle} label='Doctor ID' placeholder='Enter Doctor ID' fullWidth required onChange={(event)=>setDocId(event.target.value)} />
          <BtnWrap>
            <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={docClick}>Select</Button>
            <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={closeModal}>Close</Button>
          </BtnWrap>
        </ModalBox>
      </Modal>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Patient Modal"
      >
        <ModalBox>
          <Grid align='center'>
              <h2>Enter Your Id</h2>
          </Grid>
          <TextField style={textStyle} label='Patient ID' placeholder='Enter Patient ID' fullWidth required onChange={(event)=>setPatientId(event.target.value)} />
          <BtnWrap>
            <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={PaitentClick}>Select</Button>
            <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={closeModal1}>Close</Button>
          </BtnWrap>
        </ModalBox>
      </Modal>
        <Box>
            <Paper onClick={openModal} elevation={10} style={paperStyle}>
              <ImgContainer>
                <img src={Doctor} alt='img' />
              </ImgContainer>
              <Name>
                Doctor's Dashboard
              </Name>
            </Paper>
        </Box>
        <Box>
            <Paper onClick={openModal1} elevation={10} style={paperStyle}>
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
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
`
export default HospDashHome