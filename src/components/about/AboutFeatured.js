import styled from "styled-components"
import {Wrapper} from 'container/Container'
import { bodyText, smallTitle } from "styles/TextStyles"
import React from "react"

const AboutFeatured = () => {

    const text = [
        {title:"Corporate Design"},

      {title:"Motion Graphics"},

      {title:"Brand Identity Design"},
    ]

    const featured =[
        {title: "UXBootcamp",
    link:"https://bootcamp.uxdesign.cc/agrifics-simplifying-agricultural-ecommerce-8e091aa82564"},
{title: "Tribune",
link:"https://tribuneonlineng.com/research-is-the-backbone-of-product-design-%e2%80%95-leonard/"},
{title: "The Nation",
link:"https://thenationonlineng.net/research-is-the-backbone-of-product-design/"},
{title: "Republican",
link:"https://www.republicanng.com/meet-orezi-a-nigerian-working-on-telemedicine-platform-to-aid-patients-book-appointment-with-doctors/"}, 
{title: "Bunaaj",
link:"https://bunnaj.com/3038/orezi-a-nigerian-lad-working-on-telemedicine-platform-to-aid-patients-book-appointment-with-doctors/"},
    ]

    const spotify =[
        {title:"Spotify", 
    link:"https://open.spotify.com/playlist/5t2JmefrO9oqAN5ZLuXpPG?si=fGuGfZEeRwm7FhV40uEiXQ&dl_branch=1"}
    ]
    return (
        <Body className=' w-full h-full mt-10 mb-10 2xl:mt-20  xl:mt-20 lg:mt-20 2xl:mb-20  xl:mb-20 lg:mb-20'>
            <Wrapper className=' h-full grid gap-7 2xl:gap-24 xl:gap-24 lg:gap-24 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 justify-start '>

    <Cover className=' text-white' >
<Title className=' text-white'>Featured In</Title>
{featured.map((featured,index)=>
<div key={index} className=' mt-4 2xl:mt-8 xl:mt-8 lg:mt-8'>

<TextLink href={featured.link} target="_blank" rel="noopener noreferrer">

<Text className=' mt-2 mb-2 '>
     {featured.title}
    </Text> 

</TextLink>

</div>
              
)}
  </Cover>
  <Cover className=' text-white' >
<Title className=' text-white'>Other Area Of Expertise</Title>
{text.map((featured,index)=>
<div key={index} className=' mt-4 2xl:mt-8 xl:mt-8 lg:mt-8'>

<Text className=' mt-2 mb-2 text-white'>
     {featured.title}
    </Text> 


</div>
              
)}
  </Cover>

  <Cover className=' text-white' >
<Title className=' text-white'>My Playlist?</Title>
{spotify.map((spotify,index)=>
<div key={index} className=' mt-4 2xl:mt-8 xl:mt-8 lg:mt-8'>

<TextLink href={spotify.link} target="_blank" rel="noopener noreferrer">

<Text className=' mt-2 mb-2 '>
     {spotify.title}
    </Text> 

</TextLink>

</div>
              
)}
  </Cover>


            </Wrapper>
            
        </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
min-height: 200px;
`
const Cover = styled.div``
const Title = styled(smallTitle)`
white-space: nowrap;
`
const Text = styled(bodyText)``

const TextLink = styled.a`
transition: 0.3s ease-in;
color: #F5AD00 !important;
:hover{
     opacity: 0.7;
    }
`
export default AboutFeatured
