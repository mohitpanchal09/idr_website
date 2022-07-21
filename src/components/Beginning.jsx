
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'
import { mobile8 } from '../responsive'


const Container = styled.div`
background-color:#1E1E1E;
display:flex;
flex-wrap:wrap;
// align-items:center;
// justify-content:center;



`
const Wrapper1 = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
overflow:hidden;


${mobile({marginTop:"40px"})}
${mobile3({marginTop:"70px"})}

`
const Wrapper2 = styled.div`



`

const ImageContainer = styled.div`

`
const Image = styled.img`
height:30vh;
padding:10vh;
${mobile({height:"25vh",padding:"5vh"})}
${mobile2({height:"25vh"})}
${mobile3({display:"none"})}

`

const InfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title = styled.div`
color: #AFAFAF;
font-size:44px;
line-height: 150%;


font-weight:600;
${mobile2({fontSize:"28px"})}
${mobile8({fontSize:"24px"})}
`
const Tape = styled.div`
background-color:black;
`
const Desc =styled.p`


width:70%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
text-align:center;
${mobile2({fontSize:"15px"})}

`
const Desc1 = styled.p`

`

const Beginning = () => {
  return (
    <Container>
        <Wrapper1>
            <ImageContainer>
                <Image src='https://cdn.discordapp.com/attachments/891025496601661504/999371967465533460/unknown.png'/>
            </ImageContainer>
            <InfoContainer>
                <Title >Just A Beginning In Indian Skies</Title>
                <Desc>IDR Research and Development private limited is revolutionizing the approach towards Make In India
</Desc>

            </InfoContainer>
            {/* <Tape><marquee style={{ color: 'red', fontSize: '3em' }}>Test</marquee></Tape> */}
            
        </Wrapper1>
        



       


       
    </Container>
  )
}

export default Beginning;
