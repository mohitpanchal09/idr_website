import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'
import React from 'react'
import styled from 'styled-components'
import ExploreBoxes from '../components/ExploreBoxes'

const Container = styled.div`
background-color:#1E1E1E;
padding:50px;

`

const Title = styled.div`
padding:20px;
color: #AFAFAF;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
`

const Wrapper = styled.div`
background-color: rgba(0, 0, 0, 0.17);
margin:0px 50px;
box-shadow: 0px 10.2571px 12.4551px rgba(0, 0, 0, 0.25);
border-radius: 16.851px;
`

const Wrapper1 = styled.div`
display:flex;

align-items:center;
justify-content:center;
overflow:hidden;


${mobile({marginTop:"40px"})}
${mobile3({marginTop:"70px"})}

`

const Image = styled.img`
height:20vh;
// z-index:3;
${mobile({height:"40vh"})}
${mobile2({height:"35vh"})}
${mobile3({height:"30vh",width:"25vh"})}


`
const InfoContainer = styled.div`
// margin:0px 50px;

`
const Desc =styled.p`


width:70%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 400;
font-size: 22px;
text-align:center;

${mobile({fontSize:"15px",padding:"10px",width:"100%"})}
${mobile({fontSize:"14px",padding:"10px",width:"100%"})}
${mobile({fontSize:"0.71rem",padding:"10px",width:"100%",padding:"5px"})}
`

const ImageContainer = styled.div`

`
const ImageTitle = styled.p`
font-size:15px;
color: #AFAFAF;
text-align:center;
margin-top:-3vh;
font-weight:500;
`




function ExploreBox() {
  return (
    <Container>
        <Title>Explore With Us</Title>
        <Wrapper>
        <Wrapper1>
            <ImageContainer>
                <Image src='https://cdn.discordapp.com/attachments/891025496601661504/999371967465533460/unknown.png'/>
                <ImageTitle>RESEARCH & DEVELOPMENT PRIVATE LIMITED</ImageTitle>
            </ImageContainer>
            <InfoContainer>
                {/* <Title >Just A Beginning In Indian Skies</Title> */}
                <Desc>IDR is working on Nexten drone related Technologies
 which can revolutionize the approach towards Made in India
as well as Self-reliant India.
</Desc>

            </InfoContainer>
            {/* <Tape><marquee style={{ color: 'red', fontSize: '3em' }}>Test</marquee></Tape> */}
            
        </Wrapper1>
        
        <ExploreBoxes />

        </Wrapper>



    </Container>
  )
}

export default ExploreBox
