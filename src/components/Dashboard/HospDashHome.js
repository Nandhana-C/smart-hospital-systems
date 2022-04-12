import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

function HospDashHome() {
    const paperStyle = { padding: 20, height: 325 , width: 325, margin: '20px auto', borderRadius: '10px', backgroundColor: '#FFB703', color:'black' }
  return (
    <Section>
      <Container>
        <Box>
            <Paper elevation={10} style={paperStyle}>
                Doctor
            </Paper>
        </Box>
        <Box>
            <Paper elevation={10} style={paperStyle}>
                Paitent
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
`
export default HospDashHome