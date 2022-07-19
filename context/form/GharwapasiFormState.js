import ApplyGharwapasiContext from './ApplyGharwapasi';
import { useState } from 'react'


const ApplyGharwapasiState = (props)=>{
    const [aadharId, setAadharId] = useState('');
    const [imgId, setImgId] = useState('');
    const [activeStep, setActiveStep] = useState(0);

    return(
        <ApplyGharwapasiContext.Provider value={{aadharId,setAadharId,imgId,setImgId,activeStep,setActiveStep}}>
            {props.children}
        </ApplyGharwapasiContext.Provider>
    )
}


export default ApplyGharwapasiState