import React,{useState} from 'react'
import { MainConatainer,FullButton } from "../../components";
import { Box50,FlexBox} from '../../styles/containers'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { InputField } from '../../components/forms/formui/InputField';
import {  State, City }  from 'country-state-city';
import Data from './component/Data';


const AddNewCase = () => {
    const [editorData, setEditorData] = useState('');
    const [cityList, setCityList] = useState();
    const [stateList, setStateList] = useState();
    const handleCountryChange = (e) => {
        const res = State.getStatesOfCountry(e);
        setStateList(res);
      }
    const handleStateChange = (e) => {
        let temp = e.split('+');
        console.log(temp)
        const res = City.getCitiesOfState(temp[1], temp[0]);
        
        setCityList(res);
      }
    
  return (
    <MainConatainer>
        <FlexBox>
            <Box50>
                <Formik
                        initialValues={{
                        title:"",
                        category:"",
                        ShortDescription:"",
                        body:editorData,
                        RefrenceDescription:"",
                        IncidentDate:"",
                        State:"",
                        City:"",
                        Country:"",
                        RefrenceDescription:"",

                        }}

                        onSubmit={(values)=>{
                        console.log(values);
                        }}
                >
                    <Form>
                        <InputField label="Title" type="text" name="title"/>
                        <Field as="select" name="category" className="form-control">
                            <option value="Halala">Halala</option>
                            <option value="Mutah">Mutah</option>
                            <option value="SunnatMarriage">Sunnat Marriage</option>
                            <option value="Love_Jihad">Love Jihah</option>
                            <option value="HonorKillings">Honor Killings</option>
                            <option value="HateKillings">Hate Killings</option>
                            <option value="Other">Other</option>
                        </Field>
                        <InputField label="Short Description" type="text" name="ShortDescription"/>
                        <InputField label="Incident Date" type="date" name="IncidentDate"/>
                        <InputField label="Refrence Links" type="textarea" name="RefrenceDescription" placeholder="News Article Wikipedia youtube video Link"/>
                        <Field as="select" name="Country" className="form-control my-2" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                            <option selected>Country</option>
                            <option value="IN">India</option>
                            <option value="PK">Pakistan</option>
                            <option value="BD">Bangladesh</option>
                            <option value="AF">Afganistan</option>
                            <option value="GB">UK</option>
                            <option value="FR">France</option>
                            <option value="NP">Nepal</option>
                            <option value="BH">Bhutan</option>
                        </Field>
                        {stateList && <Field as="select" name="State" className="form-control my-2" onChange={(e)=>{handleStateChange(e.target.value)}}>
                            {stateList.map((item,index)=>(
                                <option key={index} value={`${item.isoCode}+${item.countryCode}`}>{item.name}</option>
                            ))}
                        </Field>}
                        {cityList && <Field as="select" name="City" className="form-control my-2">
                            {cityList.map((item,index)=>(
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </Field>}
                        {/* <CKEditor editor={ ClassicEditor } onChange={ (  event,editor ) => {const data = editor.getData();setEditorData(data);}}  
                        name="body"/> */}

                    <FullButton type='submit'>Submit</FullButton>
                    </Form>


                </Formik>
            </Box50>
            <Data/>
        </FlexBox>
    </MainConatainer>
  )
}

export default AddNewCase