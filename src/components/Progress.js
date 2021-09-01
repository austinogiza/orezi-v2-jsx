import { useNProgress} from '@tanem/react-nprogress'
import { LoadBar } from "components/LoadBar"
import { ProgressContainer } from "components/ProgressContainer"
import React from 'react'


export const Progress =({isAnimating})=>{

  
    const {animationDuration, isFinished,progress} = useNProgress({
        isAnimating,
    })
    return(

        <ProgressContainer animationDuration={animationDuration} isFinished={isFinished}>

            <LoadBar progress={progress} animationDuration={animationDuration}/>
        </ProgressContainer>
    )

}