import React from "react";
import styled from "styled-components"




const ImageWrapper=({src,alt,width,height}) => {

 
    return (
        <Body width={width} height={height} src={src} alt={alt} />  
            
    )
}

const Body = styled.img`
max-width: ${props=>props.width};
max-height: ${props=>props.height};
width: 100%;
height: 100%;

`

export default ImageWrapper
