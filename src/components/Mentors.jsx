import React from 'react'
import styled from 'styled-components'
import { mentorsItems, popularProducts } from '../data';
import Mentor from './Mentor';
import { mobile8 } from '../responsive'
import AOS from "aos";
import "aos/dist/aos.css"
import { mobile4 } from '../responsive'
import Service from './Service';
const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    background-color: #828282;
`
;
const Title = styled.p`
color: black;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;
${mobile8({fontSize:"40px"})}
${mobile4({fontSize:"30px"})}

`
const Wrapper = styled.div`
background-color:#828282;
padding:50px 0px;

`

function Mentors() {
  AOS.init({
    duration:2000
  })
  return (
    <Wrapper >
        <Title>Mentors</Title>
    <Container>
     
     {mentorsItems.map((item) => (
        <Mentor item ={item} key={item.id} />
    ))}


    </Container>
    </Wrapper>
  )
}

export default Mentors
