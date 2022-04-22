import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

function TypeWriterText() {
  return (
    <>
    <Title>
        Experience a new era of Hospital
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">APPOINTMENTS</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">PRE DIAGNOSIS</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">MEDICAL RECORDS</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-4">CARING</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-5">HEALING</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-6">LEADING</span>')
    .pauseFor(2000)
    .deleteAll()
    .start()

      
  }}
/>
    </Title>
    <SubTitle>The Hospital of the Future, Today!!! </SubTitle>
    <ButtonContainer>
    <Button text="SignUp" link="/signup" />
    </ButtonContainer>
    </>
  )
}

const Title = styled.h2`
    font-size: ${props=> props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self:flex-start;
    span{
        text-transform: uppercase;
        font-family: 'Kanit', sans-serif;
    }
    /* .text-1{
        color: blue;
    } */
    /* .text-2{
        color: red;
    } */
    /* .text-3{
        color: yellow;
    } */
    /* .text-4{
        color: orange;
    } */
    /* .text-5{
        color: green;
    } */
    /* .text-6{
        color: blue;
    } */
`
const SubTitle = styled.h3`
    font-size: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.text},0.6)`};
    font-weight:600;
    margin-bottom:1rem;
    width: 80%;
    align-self:flex-start;
`
const ButtonContainer = styled.div`
    width: 80%;
    align-self:flex-start;
`

export default TypeWriterText