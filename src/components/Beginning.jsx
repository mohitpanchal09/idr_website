
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'


const Container = styled.div`
background-color:#1E1E1E;
// display:flex;
align-items:center;
justify-content:center;;



`
const Wrapper1 = styled.div`
display:flex;

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
${mobile({height:"40vh"})}
${mobile2({height:"35vh"})}
${mobile3({height:"30vh",width:"25vh"})}


`
const Image2 = styled.img`
height:50vh;
display:flex;
${mobile({marginBottom:"50px",height:"30vh"})}

${mobile2({height:"25vh"})}

${mobile3({height:"18vh"})}

`
const InfoContainer = styled.div`
// margin:0px 50px;

`
const Title = styled.div`
color: #AFAFAF;
font-size:44px;
line-height: 250%;


font-weight:600;
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
// text-align:center;

${mobile({fontSize:"15px",padding:"10px",width:"100%"})}
${mobile({fontSize:"14px",padding:"10px",width:"100%"})}
${mobile({fontSize:"0.71rem",padding:"10px",width:"100%",padding:"5px"})}
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
