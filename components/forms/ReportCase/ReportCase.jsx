import React,{useState} from 'react'
import { FullButton,Loader } from '../../';
import { InputField,Label,TextArea,CustomSelect } from './ReportCaseStyle';
import { createCase } from '../../../appollo/forms/CreateForms';
import { useRouter } from 'next/router'

import { useMutation } from '@apollo/client';

const ReportCase = () => {
    const [createCaseHandle, { loading, error, data }] = useMutation(createCase);
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [date,setDate] = useState('');
    const [shortDescription,setShortDescription] = useState('');
    const [refrenceLink,setRefrenceLink] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const router = useRouter();
    const handleSubmit = () => {
       
        if(title && country && state && city && date && shortDescription && refrenceLink && description){
            // console.log(title,country,state,city,date,shortDescription,refrenceLink,description)
            const ResponseData = {
                "title": title,
                "Country": country,
                "State": state,
                "City": city,
                "IncidenDate": date,
                "ShortDescription": shortDescription,
                "RefrenceDescription": refrenceLink,
                "body": description,
                "category": category,
            }

            try {
                createCaseHandle({
                    variables: {
                      data: ResponseData,
                    },
                  });
                
            } catch (error) {
                console.log(error);
            }
        }else{
            alert('Please fill all the fields')
        } 
    }
    if(data){
        router.push('/success');
    }

    
  return (
    
   <>
    {loading ? <Loader /> :  <div>
        <Label>Title</Label>
        <InputField type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
        <CustomSelect onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Love_Jihad">Love Jihad</option>
            <option value="SunnatMarriage">Sunnat Marriage</option>
            <option value="Mutah">Mutah</option>
            <option value="Halala">Halala</option>
            <option value="HonorKillings">Honor Killings</option>
            <option value="HateKillings">Hate Killings</option>
            <option value="Other">Other</option>
        </CustomSelect>
        <Label>Country</Label>
        <InputField type="text" onChange={(e)=>{setCountry(e.target.value)}}/>
        <Label>State</Label>
        <InputField type="text" onChange={(e)=>{setState(e.target.value)}}/>
        <Label>City</Label>
        <InputField type="text" onChange={(e)=>{setCity(e.target.value)}}/>
        <Label>Incident Date</Label>
        <InputField type="date" onChange={(e)=>{setDate(e.target.value)}}/>
        <Label>Short Description</Label>
        <InputField type="text" onChange={(e)=>{setShortDescription(e.target.value)}}/>
        <Label>Refrence Link</Label>
        <TextArea onChange={(e)=>{setRefrenceLink(e.target.value)}}/> 
        <Label>Complete Description</Label>
        <TextArea onChange={(e)=>{setDescription(e.target.value)}}/>
        <FullButton onClick={()=>{handleSubmit()}}>Submit The Case</FullButton>
    </div>}
   </>
  )
}

export default ReportCase