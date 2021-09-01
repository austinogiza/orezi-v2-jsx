
import styled from "styled-components"
import {Wrapper} from 'container/Container'
import ImageWrapper from "components/ImageWrapper"
import {bodyText, bodyTitle} from 'styles/TextStyles'
import {bodyButton} from 'styles/Buttons'
import resume from 'assets/Orezi_Mena.pdf'
import React from "react"


const AboutHero = () => {
    return (
        <Body className=' w-full h-full mt-10 mb-10'>
            <Container>
                <Cover className=' flex flex-col justify-center'>
<Title className=' text-white'>Who’s Orezi Mena</Title>
<Text className=' text-white mt-2'>Hi, I'm Orezi also known as "TheCreativeMENA", a Nigerian-Based Product & Motion Graphics Designer, With experiences ranging from Health Care, Agritech, Edutech with published case studies in the Banking & Finance, and E-commerce industries, and features on UXBootcamp, Tribune amongst others, I consider myself versed in product and digital design. As a creative, I'm heavily invested in designing products for brands with the aim of better telling their story, improving their user experience and prioritizing conversion focused digital interfaces. I am a blockchain enthusiast, having past worked on DAO and NFTs, projects I believe will change lives, and an active volunteer and community builder. To learn more about me</Text>
<Cover className=' mt-8'>
<ResumeButton href={resume} download>View Resume</ResumeButton>

</Cover>
                </Cover>

                <OreziCover>
                    <ImageWrapperCover height={514} width={411} src="https://res.cloudinary.com/dimrd8ott/image/upload/v1628584298/IMG_0109_1_1_1_iycpbj.png" alt="The creative mena"/>


                </OreziCover>



            </Container>
            
        </Body>
    )
}


const Body = styled.div`
height: 100%;
width: 100%;
min-height: 700px;
`
const Cover = styled.div`
grid-area: OreziLeft;
`
const ImageWrapperCover = styled(ImageWrapper)`
height: 100%;
width: 100%;
max-width: 411px;
max-height: 514px;


`

const Container = styled(Wrapper)`
display: grid;
grid-template-areas: "OreziLeft OreziRight";
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;
@media only screen and (max-width:650px){
    grid-template-areas: "OreziRight"
    "OreziLeft";
grid-template-columns: repeat(1,1fr);
grid-gap: 24px;   
}

`

const OreziCover = styled.div`
grid-area: OreziRight;
`
const Title = styled(bodyTitle)``
const Text = styled(bodyText)``
const ResumeButton = styled(bodyButton)``
export default AboutHero
