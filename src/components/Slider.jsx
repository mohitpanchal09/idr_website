
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react';
import { mobile2 } from '../responsive';
import { mobile3 } from '../responsive';

const Container = styled.div`
background-color:#1E1E1E;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({overflow:"hidden"})}

`
const Arrow = styled.div`

`
;
const Wrapper = styled.div`
`
;
const Slide = styled.div`

`;
const ImgContainer = styled.div`


`
;
const Image =  styled.img`
height:60vh;
${mobile({height:"40vh"})}
${mobile2({height:"30vh"})}
${mobile2({height:"20vh"})}

`
;
const InfoContainer = styled.div`

`;

const Title = styled.h1`
font-family:'syne';
// font-style:normal;
font-weight: 800;
font-size: 111.299px;
margin:20px;
color:white;


text-shadow: 8.16189px 19.2917px 2.96796px rgba(0, 0, 0, 0.25);
${mobile({fontSize:"84px",fontWeight:"700",textAlign:"center"})}
${mobile2({fontSize:"64px",fontWeight:"700",textAlign:"center"})}
${mobile2({fontSize:"44px",fontWeight:"700",textAlign:"center"})}


`;
const Desc=styled.p`

`;
const Button= styled.button`


`;





const Slider = () => {
 




  return (
    <Container>
        <Arrow  >
            

        </Arrow>
        <Wrapper >
         
          <Slide >
          <ImgContainer>
          <Title>AGOCHAR <br />MK1</Title>
          <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994699816590389288/unknown.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title></Title>
            <Desc></Desc>
            {/* <Button></Button> */}
          </InfoContainer>
          </Slide>
          
        </Wrapper>
        <Arrow  >
            
        </Arrow>
    </Container>
  )
}

export default Slider