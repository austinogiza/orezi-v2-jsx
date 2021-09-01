import styled from "styled-components"
import {projectTitle} from 'styles/TextStyles'
import { Wrapper } from "container/Container"
import React, { useEffect, useState } from "react"
import { workDetailUrl } from "api/constants"
import axios from "axios"
import PageLoading from "components/PageLoading"
import { Redirect, useParams } from "react-router"


const WorkDetails = () => {


   
    const [work, setWork]=useState(null)
    const [loading,setLoading] = useState(false)
    const [pageError,setPageError] = useState(false)
    
    const {slug}= useParams()
    
 
const fetchWork=()=>{
    setLoading(true)
    axios.get(workDetailUrl(slug))
    .then(res=>{
        setWork(res.data)
        setLoading(false)
    })
    .catch(err=>{
        setPageError(true)
        setLoading(false) 
    })

}
  

    useEffect( ()=>{
    
        fetchWork()

}, [slug])

if(pageError){
    return <Redirect to='/*'/>
}


    return (
    <>
{loading?
<>
<PageLoading/>
</>:

<>

{work &&
    <Body>
        

            <Wrapper>

                <MainTitle>{work.title}</MainTitle>
                <MainImage src={work.featured_image} alt={work.title}/>

                <Topsection className=' w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 my-10'>

                {work.role !== null && 
                <Role>
                <h1>Role</h1>
                <p>{work.role}</p>
            </Role>
                }   
                    
                    {work.length !== null && 
                       <Role>
                       <h1>Length</h1>
                       <p>{work.length}</p>
                   </Role>
                   
                    } 
                  
                  
                  {work.software !== null && 
                  <Role>
                  <h1>Tools used</h1>
                  <p>{work.software}</p>
              </Role>
              
                  }  
                   {work.outcome !== null && <Role>
                        <h1>Outcome</h1>
                        <p>{work.outcome}</p>
                    </Role>} 
                </Topsection>

                {work.overview !== null && <Overview>
                    <h1>Overview</h1>
                    <p>{work.overview}</p>
<div dangerouslySetInnerHTML={{__html: work.top_text}}/>
                </Overview>}  
                {work.problem_statement !== null && 
                  <Overview>
                  <h1>Problem Statement</h1>
                  <p>{work.problem_statement}</p>
                  <div dangerouslySetInnerHTML={{__html: work.bottom_text}}/>

              </Overview>

                } 

            </Wrapper>
            

            {/* <RelatedPost>
                <RelatedWrapper>
                    <RelatedTitle>Other Projects</RelatedTitle>
<RelatedWork>
    <RelatedWorkbox>
        <RelatedLink />
        <RelatedImage/>
    </RelatedWorkbox>
</RelatedWork>

                </RelatedWrapper>
            </RelatedPost> */}
        </Body>
}

</>
}
    </>

    )
}

const Body = styled.div`
  color: #fff ;
`
const MainTitle = styled(projectTitle)`
text-align: center;
margin:24px 0;



`
const MainImage = styled.img`
margin:16px 0 40px 0;
max-width:956px;
min-height:350px;
width:100%;
height:100%;
`
const Topsection = styled.div``
const Role = styled.div`
margin: 16px 0;

h1{
font-family:"DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
text-align: left;

}
p{
    font-family: "GGX88";
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
text-align: left;
margin: 8px 0;

}
`
      
const Overview = styled.div`
margin: 16px 0;

h1{

    font-family: "DM Serif Display";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 1.4;
letter-spacing: 0em;
text-align: left;
margin: 16px 0;
@media only screen and (max-width:650px){
    font-size: 24px;
}
}

h2{

    font-family: "DM Serif Display";
font-size: 28px;
font-style: normal;
margin: 16px 0;
font-weight: 400;
line-height: 1.6;
letter-spacing: 0em;
text-align: left;
@media only screen and (max-width:650px){
    font-size: 21px;
}
}

h3{
    font-family: "DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 33px;
margin: 16px 0;
letter-spacing: 0em;
text-align: left;
@media only screen and (max-width:650px){
    font-size: 18px;
}
}
p{
    font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
letter-spacing: 0em;
margin: 16px 0;
text-align: left;
@media only screen and (max-width:650px){
    font-size: 16px;
}
}

img{
    min-height: 300px;

max-width: 959px;
margin: 16px 0;
width:100%;

}

a{
    transition: 0.3s ease-in;
    color: #F5AD00;
    :hover{
     opacity: 0.7;
    }
}
`

const RelatedPost = styled.div`
background:#565656;
width: 100%;
min-height: 540px;
margin: 40px 0 0 0;
padding: 40px 0;
`
const RelatedWrapper = styled(Wrapper)`

`
const RelatedTitle = styled.div`

`
const RelatedWork = styled.div`

`
const RelatedWorkbox = styled.div`

`
const RelatedLink = styled.div`

`
const RelatedImage = styled.div`

`

export default WorkDetails
