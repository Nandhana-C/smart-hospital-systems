import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <LogoText>
        {/* Hosper */}
        <Link to="/">
            Hosper
        </Link>
    </LogoText>
  )
}

const LogoText = styled.h1`
    font-family: 'Kanit', sans-serif;
    /* font-size: ${props => props.theme.fontxxx1}; */
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.text};
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
` 

export default Logo