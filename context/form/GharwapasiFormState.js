import ApplyGharwapasiContext from './ApplyGharwapasi';
import { useState } from 'react'


const ApplyGharwapasiState = (props)=>{
    const [aadharId, setAadharId] = useState('');
    const [imgId, setImgId] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <ApplyGharwapasiContext.Provider value={{
            aadharId,setAadharId,imgId,setImgId,activeStep,setActiveStep,isLoading,setIsLoading
            }}>
            {props.children}
        </ApplyGharwapasiContext.Provider>
    )
}


export default ApplyGharwapasiState