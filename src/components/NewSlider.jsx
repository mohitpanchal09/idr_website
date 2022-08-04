import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import React from 'react'
// import image1 from '../img/img1.png'
// import image2 from '../img/img2.png'
import { mobile, mobile8 } from '../responsive';
const Container = styled.div`
display:flex;
margin-left:auto;
margin-right:auto;
overflow:hidden;
width: 50%;
  height: 500px;
  ${mobile({width:"80%"})}
  ${mobile8({height:"300px"})}
  
  
`
const Image = styled.img`
overflow:hidden;
width: 100%;
  height: 100%;
  object-fit: cover;
`
const Wrapper = styled.div`
background-color:black;
`

function NewSlider() {
  return (
    <Wrapper>
    <Container>
      <AliceCarousel autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={3000}
        animationType="slideleft"
        infinite
        mouseTracking={true}
        disableDotsControls
        ArrowLeft={true}
        ArrowRight={true}
        
        disableButtonsControls>
            
        <Image src='https://cdn.discordapp.com/attachments/891025496601661504/1004808986110992415/Screenshot_1.png'/>
        <Image src='https://cdn.discordapp.com/attachments/891025496601661504/1004809024761507940/Screenshot_3.png'/>
        

      </AliceCarousel>
    </Container>
    </Wrapper>
  )
}

export default NewSlider
