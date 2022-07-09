import { IoMdSend } from 'react-icons/io';
import styled from 'styled-components';
import { mobile } from './responsive';
import React from 'react'

const Container =styled.div`
height:60vh;
background-color:#828282;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Title =styled.h1`
font-size:70px;
margin:20px;
`
const Desc =styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign: "center",})}

`
const InputContainer =styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
// border:1px solid lightgray;
${mobile({width: "80%"})}

`
const Input =styled.input`
border:none;
flex:8;
padding-left:20px;
`
const Button =styled.button`
border:none;
background-color:teal;
color:white;

flex:1;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Timely Alerts for Your Favorite Products.</Desc>
        <InputContainer>
        <Input placeholder='Your email' />
        <Button>
            <IoMdSend style={{fontSize:"20px"}}/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter