import React , { useRef, useLayoutEffect } from 'react';
import styled from'styled-components';
import Vector from '../../Icons/Vector';
import gsap from'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function DrawSvg() {
    const ref= useRef(null);
    const Ballref= useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
      let element = ref.current;
      let svg = document.getElementsByClassName("svg-path")[0];
      const length = svg.getTotalLength();
      svg.style.strokeDasharray = length;
      svg.style.strokeDashoffset = length;

      let t1 = gsap.timeline({
          scrollTrigger:{
              trigger: element,
              start: "top center",
              end: "bottom bottom",
              onUpdate: (self) => {
                  const draw = length * self.progress;
                // console.log(self)
                  svg.style.strokeDashoffset = length - draw;
              },
              onToggle: self => {
                  if(self.isActive){
                     Ballref.current.style.display = 'none'; 
                  }else{
                      Ballref.current.style.display ='inline-block';
                  }
              }
          }
      })
      return () => {
        if(t1) t1.kill();
      };
    }, [])
  return (
      <>
        <Ball  ref={Ballref} />
        <VectorContainer ref = {ref}>
            <Vector/>
        </VectorContainer>
      </>
  )
}

const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg{
        width:100%;
        height: 100%;
    }
`

const Ball = styled.div`
    position:absolute;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height:1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
`

export default DrawSvg