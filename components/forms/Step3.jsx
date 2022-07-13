import React from 'react';
import { Formik, Form } from "formik";
import { InputField } from "./formui/InputField";
import { applyGharwapasi } from "../../appollo/applyGharwapasi/applyGharwapasi";
import { useMutation } from '@apollo/client'


const Step3 = ({aadharId,ApplicantImgID}) => {

    const newId = ApplicantImgID;
    const [applyGharwapasihandle, { loading, error, data }] =
      useMutation(applyGharwapasi);
    console.log("The aadhar id is", aadharId,"The applicant image is",ApplicantImgID);
  
    const handleSubmit = async (values) => {
      console.log(values);
      try {
        applyGharwapasihandle({
          variables: {
            data: values,
          },
        });
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    };
  
    const formArray = [
      {
        label: "Name",
        placeholder: "Enter your name",
        type: "text",
        name: "Name",
      },
      {
        label: "Number",
        placeholder: "99xxxxx999",
        type: "text",
        name: "PhoneNumber",
      },
      {
        label: "Address",
        placeholder: "Address",
        type: "textarea",
        name: "Address",
      },
      {
        label: "Aadhar Number",
        placeholder: "22xx xxxx xxxx xxxx",
        type: "text",
        name: "AadharNumber",
      },
    ];
    return (
      <div>
        {console.log("The applicant image is",ApplicantImgID)}
        <Formik
          initialValues={{
            Name: "",
            PhoneNumber: "",
            Address: "",
            AadharNumber: "",
            AadharPdf:`${aadharId}`,
            ApplicantImage:`${ApplicantImgID}`,
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            {formArray.map((item, index) => (
              <InputField
                key={index}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
              />
            ))}
            <div className="">
              <input type="number" name="AadharPdf" value={aadharId} readOnly/>
              <input type="number" name="ApplicantImage" value={ApplicantImgID} readOnly/>
            </div>
            <button type="submit" className="btn btn-primary col-md-12 my-3">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  };

export default Step3