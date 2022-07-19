import React, { useContext } from "react";
import { ApplyGharwapasiContext } from "../../../context";
import { Stepper, Step, StepLabel } from "../../../assets";
import { FormContainer } from "./GharwapasiFormStyle";
import { Step1,Step2,Step3 } from './steps'

const GharwapasiForm = () => {
  const a = useContext(ApplyGharwapasiContext);
  const {activeStep} = a;
  const steps = ["Your Aadhar Card", "Click Your Photo", "Personal Details"];
  return (
    <FormContainer className="row">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? <Step1 />: activeStep === 1 ?<Step2 />: <Step3/>}
    </FormContainer>
  );
};

export default GharwapasiForm;
