import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
import AOS from "aos";
import "aos/dist/aos.css"
import { mobile4 } from '../responsive'
import AliceCarousel from 'react-alice-carousel';
const Wrapper = styled.div`
background-color: #f5fafd;
`

const Info = styled.div`
opacity:0;
width:100%;
font-weight:700;
text-align:center;
height:25%;
position:absolute;

background-color: rgba(0,0,0,0.2);
z-index:3 ;
// display:flex;
align-items:flex-end;
justify-content:center;
transition: all 0.5s ease;
cursor:pointer;


`

;
const Container = styled.div`
flex:1;
margin:5px 20px;
min-width:220px;
height:320px;
overflow:hidden;
display:flex;
align-items:flex-end;
justify-content:center;
border-radius:7%;
background-color: #f5fbfd;
position:relative;

&:hover ${Info}{
    opacity:1;
   
    

}`;

const  Image = styled.img`
    height:50%;
    z-index:2;
    display:flex;
    margin-top:auto;
    margin-bottom:auto;
    ${mobile({height:"62%"})}
    ${mobile({height:"58%"})}
    ${mobile4({height:"66%"})}
  //   &:hover{
  //     transition: all 0.5s ease;
  //     transform: scale(1.2);
  // }
    
`

const Icon = styled.div`s
// width:40px;
// height:40px;
// border-radius:50%;

// background-color: white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
bottom:0;
color:black;
&:hover{
    background-color:#e9f5f;
    transform: scale(1.2);
    
}
`


const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color: white;
position:absolute;
// z-index:0;

`

const Service = ({item}) => {
  AOS.init()
  return (
    
    <Container data-aos={"fade-up"}  aos_offset="100">
        <Circle />
        <Image  src={item.img} />
        <Info >
        <Icon>
                {item.name}
            </Icon>
            <Icon>
                {item.designation}
            </Icon>
            
            
        </Info>
        


    </Container>
    
  )
}

export default Service;
