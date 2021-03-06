import React,{useContext,useState} from 'react';
import { useRouter } from 'next/router'
import { applyGharwapasi } from "../../../../appollo/applyGharwapasi/applyGharwapasi";
import { useMutation } from '@apollo/client';
import { ApplyGharwapasiContext } from '../../../../context/';
import Loader from '../../../CustomComponent/Loader/Loader';


const Step3 = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');
    const [AadharNumber,setAadharNumber] = useState('');
    const [address,setAddress] = useState('');

    const a = useContext(ApplyGharwapasiContext);

    const responseData = {
      "Name": name,
      "PhoneNumber": number,
      "Address": address,
      "AadharNumber": AadharNumber,
      "AadharPdf":a.aadharId,
      "ApplicantImage":a.imgId,

    }
    const [applyGharwapasihandle, { loading, error, data }] =useMutation(applyGharwapasi);
  
    const handleSubmit = async (e) => {
      // console.log(values);
      e.preventDefault()
      try {
        applyGharwapasihandle({
          variables: {
            data: responseData,
          },
        });
      } catch (error) {
        console.log(error);
      }
      
    };
    if(data){
      router.push('/success');
    }
    if(error){
      router.push('/error');
    }

    const handleChange = (e) => {
      // console.log(e.target.value)
      const {name,value} = e.target;
      if(name === "Name"){
        setName(value);
        
      }
      if(name === "PhoneNumber"){
        setNumber(value);
      }
      if(name === "Address"){
        setAddress(value);
      }
      if(name === "AadharNumber"){
        setAadharNumber(value);
      }
    }
    return (
      <>
        {loading ? <Loader /> : <div>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label className="form-label" htmlFor="name">Name</label>
            <input type="text" className='form-control' name="Name" onChange={(e)=>{handleChange(e)}}/>
            <label className="form-label" htmlFor="name">Phone Number</label>
            <input type="text" className='form-control' name="PhoneNumber" onChange={(e)=>{handleChange(e)}}/>
            <label className="form-label" htmlFor="name">AadharNumber</label>
            <input type="text" className='form-control' name="AadharNumber" onChange={(e)=>{handleChange(e)}}/>
            <label className="form-label" htmlFor="name">Address</label>
            <input type="text" className='form-control' name="Address" onChange={(e)=>{handleChange(e)}}/>
            <button type="submit" className="btn btn-primary col-md-12 my-3">
              Submit
            </button>
          </form>   
      </div>}
      </>
    );
  };

export default Step3