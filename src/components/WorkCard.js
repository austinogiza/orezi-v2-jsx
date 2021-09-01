import styled from "styled-components"
import { bodyText, smallTitle } from "styles/TextStyles"
import {Link} from 'react-router-dom'
import React from "react"


const WorkCard  = ({link,title,text,src, live}) => {


    return (
        <Body className=" mt-10 2xl:mt-16 xl:mt-16 lg:mt-16 gap-8 2xl:gap-12 xl:gap-12 lg:gap-12 w-full h-full grid grid-cols-1  2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center items-center">
            <Cover>
<ImageWrapperCover alt={title} width={406} height={450} src={src}/>
            </Cover>
            <Cover className=" max-w-lg w-full text-white">
                <Title className=" max-w-lg w-full text-white">{title}</Title>
                <Text className=' mt-4 mb-10'>{text}</Text>
                {live === true ? <LinkRef to={link} className="orezi-clr-btn mt-10"> 

VIEW CASE STUDY

</LinkRef>:

<DisabledLinkRef className="orezi-clr-btn mt-10"> 

Coming Soon

</DisabledLinkRef>}

                </Cover>
            
        </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
min-height: 450px;
position: relative;
`
const Cover = styled.div``
const ImageWrapperCover = styled.img`
max-width: 406px;
max-height: 450px;
height:100%;
width:100%;
min-height: 300px;
`
const LinkRef = styled(Link)``
const Title = styled(smallTitle)`

`

const DisabledLinkRef = styled.div`
cursor: not-allowed;


`
const Text = styled(bodyText)``
export default WorkCard
