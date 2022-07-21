import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { popularDrones } from '../data';
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
import { mobile4 } from '../responsive'
import CircleIcon from '@mui/icons-material/Circle';

const Wrapper = styled.div`
background-color: #1E1E1E;
`

const Info = styled.div`

font-weight: 200;
color:white;
text-align:left;

// position:absolute;


display:flex;
flex-direction:column;

transition: all 0.5s ease;
// cursor:pointer;
font-size: 15.7122px;
line-height: 150%;
${mobile8({fontSize:"12px"})}
${mobile4({fontSize:"10px"})}
`

;
const Container = styled.div`

    margin:20px 60px;
    width:480px;
    height:15.5rem;
    display:flex;
    align-items:center;
    // flex-direction:row;
    transition: all 0.5s ease;

    // justify-content:center;
    background-color: rgba(0, 0, 0, 0.17);;
    // position:relative;
    border-radius:8%;
    box-shadow: 0px 10.2571px 12.4551px rgba(0, 0, 0, 0.25);
    
    ${mobile({minWidth:"170px",height:"11rem"})}
    ${mobile8({minWidth:"150px",height:"10rem",margin:"10px 16px"})}
    ${mobile4({minWidth:"120px",height:"8rem",margin:"10px 16px"})}
    &:hover{
      transition: all 0.5s ease;
      transform: scale(1.1);
  }
    
    
`;

const Heading = styled.p`
font-size:30px;
font-weight:700;
line-height:150%;
`

const  Image = styled.img`
    height:70%;
    z-index:2;
    ${mobile({height:"62%"})}
    ${mobile({height:"58%"})}

    
`
const Desc = styled.div`
display:flex;
align-items:center;
font-size:14px;



`


const Product = ({item}) => {
  return (
    
        
    <Container>
        
        <Image  src={item.img} />
        <Info >
        <Heading>{item.heading}</Heading>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}}/>{item.title[0]}</Desc>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}}/>{item.title[1]}</Desc>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}} />{item.title[2]}</Desc>
            
        </Info>



    </Container>
    
  )
}

export default Product;
