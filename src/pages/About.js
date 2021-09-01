import AboutFeatured from "components/about/AboutFeatured"
import AboutHero from "components/about/AboutHero"

import styled from "styled-components"
import Message from "components/Message"
import React, { useEffect } from "react"
const About:React.FC = () => {

    useEffect(()=>{
document.title= "About Me - The Creative Mena"
    }, [])
    return (
        <Body>
      
            <AboutHero/>
            <AboutFeatured/>
            <Message/>
        </Body>
    )
}


const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
export default About
