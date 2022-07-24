import React,{useContext,useState} from 'react';
import { InputField,Label } from '../../ReportCase/ReportCaseStyle'
import { FullButton } from '../../../styledComponents/basicui'
import { marriageApplication } from "../../../../appollo/MarriageApplication/MarriageApplication";
import { useMutation } from '@apollo/client';
import { ApplyGharwapasiContext } from '../../../../context/';
import { Loader} from '../../../';
import { useRouter } from 'next/router'



const Step3 = () => {
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');
    const [fbLink,setFbLink] = useState('');
    const [instaLink,setInstaLink] = useState('');
    const router = useRouter();


    const a = useContext(ApplyGharwapasiContext);

    const responseData = {
      "Name": name,
      "InstaLink": instaLink,
      "FacebookLink": fbLink,
      "InstaLink": instaLink,
      "phoneNo": number,
      "BioData":a.aadharId,
      "Image":a.imgId,

    }
    const [applyMarriageApplication, { loading, error, data }] =useMutation(marriageApplication);
  
    const handleSubmit = async () => {
      
      try {
        applyMarriageApplication({
          variables: {
            data: responseData,
          },
        });
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    };

    if(loading){
      return <Loader />
    }else if(data){
      router.push('/success');
    }else{
      return(
        <>
          
          <Label>Name</Label>
            <InputField type="text" onChange={(e)=>{setName(e.target.value)}}/>   
            <Label>Phone Number</Label>
            <InputField type="number" onChange={(e)=>{setNumber(e.target.value)}}/>   
            <Label>Facebook Link</Label>
            <InputField type="text" onChange={(e)=>{setFbLink(e.target.value)}}/>   
            <Label>Instagram Link</Label>
            <InputField type="text" onChange={(e)=>{setInstaLink(e.target.value)}}/>
            <FullButton onClick={()=>{handleSubmit()}}>Submit</FullButton>
        </>
      )
    }
  };

export default Step3