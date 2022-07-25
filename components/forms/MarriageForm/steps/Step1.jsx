import React,{useState,useContext} from "react";
import { ApplyGharwapasiContext } from '../../../../context/';
import { Loader } from '../../../';
import { BACKEND_URL,BACKEND_TOKEN } from '../../../../appollo/appolo'

const Step1 = () => {
  const [prevImg, setPrevImag] = useState(null);
  const a = useContext(ApplyGharwapasiContext);
  const handleChange = (e) => {
    setPrevImag(e.target.files[0]);
    
  }

  const handleSubmit = () => {
    a.setIsLoading(true);
    if(prevImg){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${BACKEND_TOKEN}`);
      console.log(prevImg)
      var formdata = new FormData();
      formdata.append("files", prevImg);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

    fetch(`${BACKEND_URL}`, requestOptions)
      .then(response => response.text())
      .then(result =>{
        const output = JSON.parse(result);
        
        a.setAadharId(output[0].id);
        a.setIsLoading(false);
      })
      .catch(error => console.log('error', error));
      
    }else{
      alert("Please Upload Bio Data PDF");
    }
  }
  if(a.aadharId){
    a.setActiveStep(1);
    a.setIsLoading(false);
  }
  return (
      <>
        {a.isLoading ? <Loader /> : <div className="row py-3">
        <div className="col-md-12 py-5">
          <label htmlFor="formFile" className="form-label">
            Upload Your Bio data As per Discussed in the instruction
          </label>
          <input className="form-control form-control" id="formFile" type="file" onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div className="">
          <button className="btn btn-dark" onClick={()=>{handleSubmit()}}>Submit & Step 2</button>
        </div>
      </div> }
      </>
  );
};

export default Step1;
