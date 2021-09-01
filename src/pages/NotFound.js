import { Wrapper } from 'container/Container'
import React from 'react'
import styled from 'styled-components'
import { errorButton } from 'styles/Buttons'
import { OreziTheme } from 'styles/Color'
import { errorTitle } from 'styles/TextStyles'
import img from 'assets/error.gif'

const NotFound = () => {
    return (
        <Body>
          <Container>

          <ErrorGif src={img} alt="the creative mena gif"/>

                <ErrorTitle>Something is missing</ErrorTitle>
                <ErrorButton to='/'>Go Home</ErrorButton>

          </Container>
            
        </Body>
    )
}


const Body = styled.div`
background: ${OreziTheme.secondary};
width:100%;
height:100%;
`
const Container = styled(Wrapper)`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
min-height: 400px;
`
const ErrorGif = styled.img`
max-height: 420px;
max-width: 420px;
width:100%;
height:100%;
min-height:300px;

`

const ErrorTitle = styled(errorTitle)`
color:#fff;
margin:24px 0;
`
const ErrorButton = styled(errorButton)`

`
export default NotFound
