import React,{useContext} from 'react';
import { MarriageFormDiv,ImageWrapper } from './MarriageStyle';
import { ApplyGharwapasiContext } from "../../../context";
import { FlexBox } from '../../../styles/containers';
import { marriage1 } from '../../../assets/images';
import { Stepper, Step, StepLabel } from "../../../assets";
import { Step1,Step2,Step3 } from './steps';
import { Box50 } from '../../../styles/containers'

const MarriageForm = () => {
    const a = useContext(ApplyGharwapasiContext);
    const {activeStep} = a;
    const steps = ["Your Bio Data PDF", "Click Your Photo", "Personal Details"];
  return (
    <MarriageFormDiv>
        <FlexBox>
        <Box50>
          <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
          
        </Stepper>
      
        {activeStep === 0 ? <Step1 />: activeStep === 1 ?<Step2 />: <Step3/>}

      
        </Box50>
            <ImageWrapper>
                <img src={marriage1.src} alt="The marriage in gharwapasi" />
            </ImageWrapper>
        </FlexBox>
       

    </MarriageFormDiv>
  )
}

export default MarriageForm