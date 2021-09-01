import { Wrapper } from "container/Container"
import styled from "styled-components"
import {BsArrowRight} from 'react-icons/bs'
import WorkCard from "components/WorkCard"
import Message from "components/Message"
import React, {  useEffect, useState } from "react"

import {workbrandUrl, workProductUrl, workUrl} from 'api/constants'
import axios from "axios"
import PageLoading from "components/PageLoading"




  
const Index= () => {
    

    const [work, setWork]=useState([])
    const [workType , setWorkType]=useState("All")
    const [loading, setLoading]=useState(false)

    const fetchWork=()=>{
        setLoading(true)
        axios.get(workUrl)
        .then(res=>{
            setWork(res.data)
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
document.title ="My Work - The Creative Mena"
fetchWork()
    }, [])
    
    


   

  
const categoryClick = name =>{

    setWorkType(name)


if (name === "All"){
    setLoading(true)
    axios.get(workUrl)
    .then(res=>{
        setWork(res.data)
        setLoading(false)
    })
    .catch(err=>{
        setLoading(false)
    })
}

if(name === "Product Design"){
    setLoading(true)
    axios.get(workProductUrl)
.then(res=>{
    setWork(res.data)
    setLoading(false)
  
})
.catch(err=>{
    setLoading(false)
})

}

if(name === "Corporate Design"){
    setLoading(true)
    axios.get(workbrandUrl)
.then(res=>{
    setWork(res.data)
    setLoading(false)
  
})
.catch(err=>{
    setLoading(false)
})

}

}

const categorySelect = e =>{
    const value = e.target.value

    if (value === "All"){
        setLoading(true)
        axios.get(workUrl)
        .then(res=>{
            setWork(res.data)
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    
    if(value === "Product Design"){
        setLoading(true)
        axios.get(workProductUrl)
    .then(res=>{
        setWork(res.data)
        setLoading(false)
      
    })
    .catch(err=>{
        setLoading(false)
    })
    
    }
    
    if(value === "Corporate Design"){
        setLoading(true)
        axios.get(workbrandUrl)
    .then(res=>{
        setWork(res.data)
        setLoading(false)
      
    })
    .catch(err=>{
        setLoading(false)
    })
    
    }
    
}

    return (
        <Body>
<Wrapper>

    <Header>
<Cover>
<LeftRow>

Showing  <RightIcon/>
</LeftRow>
<RightRow>
    <Name className={workType === "All"? "active":""} onClick={e=>categoryClick(e.currentTarget.value)} value="All">All</Name>
    <Name className={workType === "Product Design" ? "active":""} onClick={e=>categoryClick(e.currentTarget.value)} value="Product Design">Product Design</Name>
    <Name className={workType === "Corporate Design" ? "active":""}  onClick={e=>categoryClick(e.currentTarget.value)} value="Corporate Design">Corporate Design</Name>
    <Rightbutton>
     <Buttonselect onChange={categorySelect}>
            <Selectoption selected value="All">All</Selectoption>
            <Selectoption value="Product Design">Product Design</Selectoption>
            <Selectoption value="Corporate Design">Corporate Design</Selectoption>
        </Buttonselect> 
    </Rightbutton>
</RightRow>
</Cover>

    </Header>
    <Workbody>
        {loading ?
        
    <>
    {loading && [1,2,3,4].map(load=>
        <PageLoading/>
        )}
    
    </>:
    
    <>
    { work.length > 0 ?
    
    <>
        {work.map((work)=>
                <WorkCard key={work.id} link={`/work/${work.slug}`} title={work.title} text={work.description} src={work.featured_image} live={work.live}/>
               )}
    
    </>:
    
    <>
<NoWork>    No work available </NoWork>
    </>}
    
    </>}

    </Workbody>
</Wrapper>
<Message/>

            
        </Body>
    )
}


const Body = styled.div`
width: 100%;
height: 100%;
`
const Header = styled.div`
color: #fff;
height: 150px;
width: 100%;
height: 41px;
max-width: 440px;
margin: 40px 0;
`
const Cover = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`

const LeftRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;
max-width: 117px;
justify-content: flex-start;
align-items: center;
font-family: 'DM Serif Display', serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
text-align: left;


`
const RightRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;

.active{
    color: #fff;
    font-family: "GGX88 Regular";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #F5AD00;


}
`
const RightIcon = styled(BsArrowRight)`
height: 16px;
width: 16px;
color: #fff;
margin: 0 16px;


`
const Name = styled.button`

max-width: 140px;
width: 100%;
white-space: nowrap;
margin: 0 24px 0 0;
font-family: "GGX88";
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 1.2;

@media only screen and (max-width:550px){
    display: none;
}


`
const Rightbutton = styled.div`
  display: none;

@media only screen and (max-width:550px){
    display: flex;
 
    width: 100%;
    max-width: 200px;
  
}
`
const Buttonselect = styled.select`
width: 200px;
height: 48px;
border: 1px solid #fff;
border-radius: 8px;
padding: 8px;
background: #1F1E1D;
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
outline: none;
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-size: 15%;
background-repeat: no-repeat;
background-position:  right 5px top 50%;
:active{
    outline: none;  
}
:focus{
    outline: none;
}


`
const Selectoption = styled.option`
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
color: #fff;
`
const Workbody = styled.div``


const NoWork = styled.div`
display: flex;
width: 100%;
height: 400px;
justify-content: center;
align-items: center;
color: #fff;

font-family: "DM Serif Display";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 1.4;

@media only screen and (max-width:650px){
    font-size: 28px;
}
`

export default Index
