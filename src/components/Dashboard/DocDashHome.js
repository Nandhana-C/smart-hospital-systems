import React from 'react';
import styled from 'styled-components';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function DocDashHome() {
  return (
    <Container>
    <Wrap>
        <Appointments>
            <AppoinmentHead>
                <h2>Appointments</h2>
            </AppoinmentHead>
            <AppoinmentList>
                <PaitentName>
                    <h2>Patient 1</h2>
                    <Icons>
                        <DoubleArrowIcon/>
                    </Icons>
                </PaitentName>
                <PaitentName>
                    <h2>Patient 2</h2>
                    <Icons>
                        <DoubleArrowIcon/>
                    </Icons>
                </PaitentName>
                <PaitentName>
                    <h2>XYZ</h2>
                    <Icons>
                        <DoubleArrowIcon/>
                    </Icons>
                </PaitentName>
            </AppoinmentList>
        </Appointments>
        <Details>
            <DetailsHead>
                <h2>Vitals & Symptoms</h2>
            </DetailsHead>
            <DetailsList>
                <PaitentDetail>
                    <Filelink>
                        <h2>Vitals.pdf</h2>
                    </Filelink>
                </PaitentDetail>
                <PaitentDetail>
                    <Filelink>
                        <h2>Record.pdf</h2>
                    </Filelink>
                </PaitentDetail>
                <PaitentDetail>
                    <Filelink>
                        <h2>Proforma.pdf</h2>
                    </Filelink>
                </PaitentDetail>
            </DetailsList>
        </Details>
    </Wrap>
</Container>
  )
}

const Container = styled.div`
    min-height: ${props => `calc(100vh - 2*(${props.theme.navHeight}))` };
    width: 100vw;
    position: relative;
    display: grid;
    place-items:center;
    overflow:hidden;
    background-color: ${props => props.theme.body};
    /* background-color: lightblue; */
`

const Wrap = styled.div`
    width: 85%;
    min-height: 80vh;
    margin: 0 auto;
    /* background-color: lightblue; */
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding: 15px 10px;
    border-radius:30px;
    @media screen and (max-width: 769px) and (min-height:450px) {
        flex-direction:column;
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        padding:0px;
        flex-direction:row;
    }
    
`
const Appointments = styled.div`
    flex:0.38;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 769px) and (min-height:450px) {
        flex:.5;
        width:90%;
        padding-bottom:10px;
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        height:100%;
    }
`

const AppoinmentHead = styled.div`
    display:flex;
    height:70px;
    justify-content:center;
    align-items:center;
    border-radius: 30px 30px 0px 0px;
    padding:0px 20px;
    h2{
        font-size:1.5em;
        padding-right:15px;
    }
    @media screen and (max-width: 769px) and (min-height:450px) {
        border-radius: 30px 30px 0px 0px;
        h2{
            font-size:1em;
        }
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        h2{
            font-size:1em;
        }
    }
`
const  AppoinmentList = styled.div`
    height:75vh;
    padding:0px 10px;
    overflow-y: scroll;
    border-radius: 20px;
    /* background-color: blue; */
    box-shadow: 1px 1px 30px 4px rgba(0,0,0,0.2);
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
        display:none;
    }
    @media screen and (max-width: 769px) and (min-height:450px) {
        border-radius: 20px;
        height:30vh;
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        height:60vh;
    }
`
const PaitentName = styled.div`
    height:50px;
    cursor:pointer;
    display:flex;
    align-items:center;
    padding: 0px 25px;
    justify-content:space-between;
    border-radius: 10px;
    h2{
        font-size:1.25em;
        font-weight: lighter;
    }
    :hover{
        transition:0.5s;
        background-color:#2F3136;
    }
    @media screen and (max-width: 769px) and (min-height:450px){
        padding:0px 10px;
        h2{
            font-size:1em;
        }
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        h2{
            font-size:1em;
        }
    }
`
const Icons = styled.div`
    display:flex;
    align-items:center;
`
const Details = styled.div`
    flex:0.6;
    @media screen and (max-width: 769px) and (min-height:450px) {
        padding-bottom:10px;
        flex:0.5;
        width:90%;
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        height:100%;
    }
`
const DetailsHead = styled.div`
    display:flex;
    height:70px;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-radius: 30px 30px 0px 0px;
    padding:0px 20px;
    h2{
        font-size:1.5em;
        padding-right:15px;
    }
    input{
        display:none;
        visibility:none;
    }
    @media screen and (max-width: 769px) and (min-height:450px) {
        border-radius: 30px 30px 0px 0px;
        h2{
            font-size:1em;
        }
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        h2{
            font-size:1em;
        }
    }
`
const DetailsList = styled.div`
    height:75vh;
    overflow-y: scroll;
    border-radius:20px;
    /* background-color:blue; */
    box-shadow: 1px 1px 30px 4px rgba(0,0,0,0.2);
    -ms-overflow-style: none;
    padding:0px 10px;
    scrollbar-width: none;
    ::-webkit-scrollbar{
        display:none;
    }
    scrollbar-width:none;
    @media screen and (max-width: 769px) and (min-height:450px) {
        border-radius: 20px;
        height:30vh;
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        height:60vh;
    }
`
const PaitentDetail = styled.div`
    height:50px;
    cursor:pointer;
    display:flex;
    align-items:center;
    padding: 0px 25px;
    justify-content:space-between;
    border-radius:10px;
    h2{
        font-size:1.25em;
        font-weight: lighter;
    }
    :hover{
        transition:0.5s;
        background-color:#2F3136;
    }
    a{
        text-decoration:none;
        color:whitesmoke;
    }
    @media screen and (max-width: 769px) and (min-height:450px){
        padding:0px 10px;
        h2{
            font-size:1em;
        }
    }
    @media screen and (max-width:1255px) and (max-height:450px){
        padding:0px 10px;
        h2{
            font-size:1em;
        }
    }
`
const Filelink = styled.div`
    width:25vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    @media screen and (max-width:1255px) and (max-height:450px){
        width:40vw;
    }
`
export default DocDashHome;