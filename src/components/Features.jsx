import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import {mobile7} from'../responsive'
import {mobile3} from '../responsive'
const Container = styled.div`
background-color:#1E1E1E;
text-align:center;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`


`
const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 60.8432px;
color: #AFAFAF;
${mobile({fontSize:"55px",flexDirection:"column"})}
${mobile2({fontSize:"40px",flexDirection:"column"})}

`
const Left = styled.div`
// flex:1;
// display:flex;
flex-direction:column;



`

const Center = styled.div`
// flex:1;
`
const Right = styled.div`
// flex:1;
`
const Desc = styled.div`

color:white;
text-align:center;
width:80%;
font-family: 'Syne';
font-style: normal;
font-weight: 600;
font-size:20px;
color:#fffff;
${mobile({fontSize:"15px"})}
${mobile2({fontSize:"12px"})}
${mobile3({fontSize:"10px"})}
`
const InfoContainer = styled.div`
display:flex;
align-items:center;
// justify-content:space-between;
justify-content:center;


`
const Image = styled.img`
height:60vh;

${mobile({height:"45vh"})}
${mobile7({height:"30vh"})}
${mobile3({height:"22vh"})}
`
const Circle = styled.div`
display:flex;

justify-content:center;
align-items:center;
border-radius: 50%;
width:200px;
height:200px;
background-color: black;
margin:20px -100px;
// box-shadow: 0px 10.3879px 12.6138px rgba(0, 0, 0, 0.25);
${mobile({height:"170px",width:"170px",margin:"20px -90px"})}
${mobile2({height:"130px",width:"130px",margin:"20px -70px"})}
${mobile3({height:"110px",width:"110px",margin:"20px -65px"})}
`

const Features = () => {
  return (
    <Container>
       <Wrapper>
            <Title>FEATURES</Title>
            <InfoContainer>
            <Left>
                <Circle>
                <Desc>15 MINUTES ENDURANCE</Desc>
                </Circle>
                <Circle>
                <Desc>PAN & TILT CONTORLS 2 AXIS SERVO GIMBAL</Desc>
                </Circle>
            </Left>
            <Center>
            <Image src='https://cdn.discordapp.com/attachments/891025496601661504/994846827230797824/unknown.png' />
            </Center>
            <Right>
                <Circle>
            <Desc>AUTONOMOUS MISSION UPTO 10 KM</Desc>
            </Circle>
            <Circle>
            <Desc>CONSTANT MONITORING AND LIVE FEED</Desc>
            </Circle>
            </Right>
            </InfoContainer>
            </Wrapper>
        
    </Container>
  )
  
}

export default Features
