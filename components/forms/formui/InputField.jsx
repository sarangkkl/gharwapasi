import React from 'react'
import { Field,ErrorMessage } from 'formik'

export const InputField = ({label,placeholder,type,name,value,onChngFunc}) => {
  // console.log("The value is",value.ApplicantImgID);
  return (
    <div className='col-md-12 form-outline'>
        <label className="form-label" htmlFor={name}>{label}</label>
        {type==="textarea" ? <Field as="textarea" name={name} className="form-control" onChange={(e)=>{onChngFunc(e)}}/>:
        <Field type={type} name={name} className="form-control" value={value} onChange={(e)=>{onChngFunc(e)}}/>}
        <ErrorMessage name={name} component="div" className="text-danger" />
    </div>
  )
}
