import React,{useState,useContext} from "react";
import { ApplyGharwapasiContext } from '../../../../context/';
import { Loader } from '../../../'

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
      myHeaders.append("Authorization", "Bearer 65f5cc9490ac47882b2c52e6e5c388dd3324aa3d615753dc55fed8a699a5b4c21fbf333d039055106d997fc9cde8986bce97e948aa204f9c093fca2fae2936978113275482f3a60f6f000433fdf1ddfccbec56c270d186105d39de3e4ed1eb7f5f69db46785a8a04202e3cae6e41799be5143fc739fa1d800d9bd99f82aae8d5");
      console.log(prevImg)
      var formdata = new FormData();
      formdata.append("files", prevImg);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

    fetch(`http://localhost:1337/api/upload/`, requestOptions)
      .then(response => response.text())
      .then(result =>{
        const output = JSON.parse(result);
        
        a.setAadharId(output[0].id);
        a.setIsLoading(false);
      })
      .catch(error => console.log('error', error));
      if(a.isLoading===false){
        a.setActiveStep(1);
      }
    }else{
      alert("Please Upload Bio Data PDF");
    }
   
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
