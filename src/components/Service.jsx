import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
import { mobile4 } from '../responsive'
const Wrapper = styled.div`
background-color: #1E1E1E;
`

const Info = styled.div`
// opacity:0;
font-weight: 200;
color:white;
text-align:center;
margin:20px;
position:absolute;
bottom:0;
// left:0;

// z-index:3 ;
display:flex;
// align-items:center;
// justify-content:center;
transition: all 0.5s ease;
cursor:pointer;
font-size: 15.7122px;
line-height: 150%;
${mobile8({fontSize:"12px"})}
${mobile4({fontSize:"10px"})}
`

;
const Container = styled.div`
    // flex:1;
    margin:20px 60px;
    min-width:280px;
    height:15.5rem;
    display:flex;
    // align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.17);;
    position:relative;
    border-radius:8%;
    ${mobile({minWidth:"170px",height:"11rem"})}
    ${mobile8({minWidth:"150px",height:"10rem",margin:"10px 16px"})}
    ${mobile4({minWidth:"120px",height:"8rem",margin:"10px 16px"})}
    
`;

const  Image = styled.img`
    height:70%;
    z-index:2;
    ${mobile({height:"62%"})}
    ${mobile({height:"58%"})}
    
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;

&:hover{
    background-color:white;
    transform: scale(1.2);
}
`

const Service = ({item}) => {
  return (
    <Container>
        
        <Image  src={item.img} />
        <Info >
            
                {item.title}
            
        </Info>



    </Container>
  )
}

export default Service;
