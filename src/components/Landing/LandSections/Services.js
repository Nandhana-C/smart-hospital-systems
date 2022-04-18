import React, { useRef, useLayoutEffect}from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';
import gsap from'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Services() {
  const revealRefs = useRef([]);
  revealRefs.current =[];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    // console.log(revealRefs)
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y:'-30%',
          scrollTrigger:{
            id:`section-${index + 1}`,
            trigger:el,
            start:'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers:true,
          }
        }
      )
    })
  
    return () => {
      
    };
  }, [])
  const ServicesItem = ({title, subtext,addToRefs}) => {
    return(
      <Item ref={addToRefs}>
        <ItemContainer>
          <Box>
            <SubTitle>{title}</SubTitle>
            <Text>{subtext}</Text>
          </Box>
        </ItemContainer>
      </Item>
    )
  }
  return (
    <Section>
      <Title>Services</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <ServicesItem addToRefs={addToRefs} title="Advanced Prediction" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <ServicesItem addToRefs={addToRefs} title="Pre-Diagnosis" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <ServicesItem addToRefs={addToRefs} title="Medical Reports" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <ServicesItem addToRefs={addToRefs} title="Serv" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <ServicesItem addToRefs={addToRefs} title="Service 5" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        </Items>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`
const Title = styled.h1`
  font-size=${(props) => props.theme.fontxxxl};
  /* font-size: 4em; */
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`
const Container = styled.div`
  width:70%;
  height: 200vh;
  background-color:${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content:center;
  align-items:center;
  position: relative;
`
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Items = styled.ul`
  list-style: none;
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  /* background-color:lightblue; */
  &>*:nth-of-type(2n +1){
    justify-content: start;

    div{
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p{
      border-radius: 40px 0 40px 0;
    }
  }
  &>*:nth-of-type(2n){
    justify-content: end;
    div{
      border-radius: 0 50px 0 50px;
      text-align:left;
    }
    p{
      border-radius: 0 40px 0 40px;
    }
  }
`
const Item = styled.li`
  width:100%;
  height:100%;
  display:flex;
`
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding:1rem;
  border: 3px solid ${props => props.theme.text};
`
const Box =styled.p`
  height:fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props => props.theme.text};
  padding: 1rem;
  position:relative;
  border: 1px solid ${props => props.theme.text};
`
const SubTitle = styled.span`
  display: block;
  font-size:${props =>props.theme.fontxl};
  text-transform:capitalize;
  color: ${props => props.theme.text};
  font-weight:400;
  margin:0.5rem 0;

`
const Text = styled.span``
export default Services