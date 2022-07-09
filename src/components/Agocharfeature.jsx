import { display } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'
const Container = styled.div`
background-color:#1E1E1E;
margin-top:-100px;


`
const Wrapper1 = styled.div`
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
// flex-wrap:wrap;
${mobile({marginTop:"40px"})}
${mobile3({marginTop:"70px"})}

`
const Wrapper2 = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:center;;
align-items:center;


`

const ImageContainer = styled.div`
// padding-bottom:px;
`
const Image = styled.img`
height:70vh;
display:flex;
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
margin:0px 10px;
margin-top:-80px


`
const Desc =styled.p`

padding:15px;
width:80%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
${mobile({fontSize:"15px",padding:"10px",width:"100%"})}
${mobile({fontSize:"14px",padding:"10px",width:"100%"})}
${mobile({fontSize:"0.71rem",padding:"10px",width:"100%",padding:"5px"})}
`

const Agocharfeature = () => {
  return (
    <Container>
        <Wrapper1>
            <ImageContainer>
                <Image src='https://media.discordapp.net/attachments/891025496601661504/994815960408141874/unknown.png?width=749&height=663'/>
            </ImageContainer>
            <InfoContainer>
                <Desc>100% INDIGENOUSLY DESIGNED AND MANUFACTURED SHELL
</Desc>
<Desc>1.2 Km RELIABLE CONNECTION IN LOS AND ELEVATION
 </Desc>
<Desc>ENCODED DATA TRANSMISSION</Desc>
            </InfoContainer>
            
        </Wrapper1>




        <Wrapper2>
            
        <ImageContainer>
                <Image2 src='https://cdn.discordapp.com/attachments/891025496601661504/994833202390765638/unknown.png'/>
            </ImageContainer>
            <InfoContainer>
                <Desc>UPTO 14 DIFFERENT CHANNELS
                   
</Desc>

<Desc>MULTIPLE MICROCONTROLLERS FOR FASTER DATA RATES
   </Desc>
<Desc>BUILT IN FPV & VTX FOR GROUND CONTTROL STATION
   
</Desc>
            </InfoContainer>
            
        </Wrapper2>
        
        
    </Container>
  )
}

export default Agocharfeature