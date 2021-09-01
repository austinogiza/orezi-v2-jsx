
import styled from 'styled-components'
import {BsArrowRight} from 'react-icons/bs'
import { mainButton  } from 'styles/Buttons'
import { bodyTitle} from 'styles/TextStyles'
import React from 'react'
const Message:React.FC = () => {
    return (
        <Body className="orezi-bg my-8  w-full flex flex-col justify-center items-center px-6">
            <Title className=" max-w-xl w-full mx-auto text-center mb-8 text-white">I would love to help you bring that idea, business, brand or products to life.</Title>
            <Button className=' flex flex-row items-center justify-center text-white orezi-btn' to="/contact"> 
            Work with me <Arrow className='arrow-btn' />
          
            </Button>
        </Body>
    )
}


const Body = styled.div`
height: 350px;
`
const Title = styled(bodyTitle)``
const Button = styled(mainButton)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

max-width: 195px;
height: 54px;
width: 100%;
color: #fff;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 29px;
cursor: pointer;
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.2;

`

const Arrow = styled(BsArrowRight)`
width: 16px;
height: 16px;
margin: 0 0 0 16px;
color: #fff;
transition: 0.3s ease-in;
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;

${Button}:hover & {
    color: #1F1E1D;
}

`
export default Message
