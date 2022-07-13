import React, { useState,useRef,useCallback } from "react";
import { Stepper, Step, StepLabel } from "../../assets";
import { FormContainer } from "./GharwapasiFormStyle";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


const GharwapasiForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [aadharId, setAadharId] = useState();
  const [applicantImgId, setApplicantImgId] = useState();
  const steps = ["Your Aadhar Card", "Click Your Photo", "Personal Details"];

  return (
    <FormContainer className="row">
      {console.log("The data in the state", aadharId, applicantImgId)}
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? <Step1 changeActive={setActiveStep} handleAadharID={setAadharId} />
       : activeStep === 1 ?
        <Step2 changeActive={setActiveStep} ApplicantImageId={setApplicantImgId}/>
         : <Step3 aadharId={aadharId} ApplicantImgID={applicantImgId}/>}
      
    </FormContainer>
  );
};

export default GharwapasiForm;



