import React from 'react';
import styled from'styled-components';

function Footer() {
  return (
    <Section>
      <Team>Design & Developed by Victorious Secret 404;</Team>
      <CC>2022 &copy; Hosper.in All Rights Reserved</CC>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${props => props.theme.body};
  padding: 20px 100px;
  display: flex;
  justify-content:space-between;
  align-items: center;
`
const Team = styled.p`
  color:#000;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`
const CC = styled.p`
  color:#000;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`
export default Footer