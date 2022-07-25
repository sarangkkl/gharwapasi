import React,{useRef,useState,useContext} from 'react';
import Webcam from "react-webcam";
import { ApplyGharwapasiContext } from '../../../../context/';
import { BACKEND_URL,BACKEND_TOKEN } from '../../../../appollo/appolo';
import Loader from "../../../CustomComponent/Loader/Loader"

const Step2 = () => {
    const webcamRef = useRef(null);
    const a = useContext(ApplyGharwapasiContext);
    const [image, setImage] = useState(null);
    const [prevImage, setPrevImage] = useState();

    function dataURLtoFile(dataurl, filename) {
 
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
  }
  
  
    const handleSubmit = () => {
      a.setIsLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${BACKEND_TOKEN}`);
      var formdata = new FormData();
      formdata.append("files", image);

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

        a.setImgId(output[0].id);
      })
      .catch(error => console.log('error', error));
      
    };
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setPrevImage(imageSrc);
      const result = dataURLtoFile(imageSrc, "image.png");
      setImage(result);
    }, [webcamRef, setImage]);
  
    const reCapture = () =>{
      setImage(null);
    }
    if(a.imgId){
      a.setActiveStep(2);
      a.setIsLoading(false);
    }
    return (
      <>
        {a.isLoading ? <Loader /> : <div className="container">
        <div className="d-flex col-md-12">
            <div>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/webp"
                style={{
                  width: "60%",
                  height: "60%",
                }}/>
            </div>
            <div>
  
              {prevImage ? <img src={prevImage}/> : null}
            </div>
        </div>
        <div className="my-3">
          <button onClick={()=>{capture()}} className="btn btn-dark text-light">Capture Image</button>
          <button onClick={()=>{reCapture()}} className="btn btn-dark text-light mx-3">Recapture</button>
        </div>
  
        <div className="d-flex w-full justify-content-between my-5">
          <button className="btn btn-primary" onClick={()=>{handleSubmit()}}>
            UPLOAD & STEP 3
          </button>
        </div>
      </div>}
      </>
    );
  };
  

export default Step2