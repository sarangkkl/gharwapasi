import React from 'react'
import { Field,ErrorMessage } from 'formik'

export const InputField = ({label,placeholder,type,name}) => {
  return (
    <div className='col-md-12 form-outline'>
        <label className="form-label" htmlFor={name}>{label}</label>
        {type==="textarea" ? <Field as="textarea" name={name} className="form-control"/>:<Field type={type} name={name} className="form-control"/>}
        <ErrorMessage name={name} component="div" className="text-danger" />
    </div>
  )
}
