import HomeHero from "components/home/HomeHero"
import HomeWork from "components/home/HomeWork"
import Message from "components/Message"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
import loaderGIF from 'assets/loader.gif'


const Index = () => {

  const [time, setTime]=useState(4)
  const [loader, setLoader]=useState(true)

   




  useEffect(()=>{

  document.title ="Home - The Creative Mena"


    window.setInterval(()=>{

setTime((timer)=> timer-1)
    },1000)

    if(time === 0){
      setLoader(false)
    }

  }, [time])
  return (
    <Body>
   
       {loader?
       
      <>
      <Preloader>

<Image alt="The creativemena loader" src={loaderGIF} />
      </Preloader>
      </>:
      
      <>
      <HomeHero/>
      <HomeWork />
      <Message/>      
      </>}

    </Body>
  )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Preloader = styled.div`

position: fixed;
background: #1F1E1D;
height: 100%;
width: 100%;
top:0;
left: 0;
z-index: 999;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Image = styled.img`
width:100%;
height:100%;
max-width: 500px;
max-height: 500px;
`



export default Index
