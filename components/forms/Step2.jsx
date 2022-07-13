import React,{useRef,useState} from 'react';
import Webcam from "react-webcam";

const Step2 = ({changeActive,ApplicantImageId}) => {
    const webcamRef = useRef(null);
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
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer 65f5cc9490ac47882b2c52e6e5c388dd3324aa3d615753dc55fed8a699a5b4c21fbf333d039055106d997fc9cde8986bce97e948aa204f9c093fca2fae2936978113275482f3a60f6f000433fdf1ddfccbec56c270d186105d39de3e4ed1eb7f5f69db46785a8a04202e3cae6e41799be5143fc739fa1d800d9bd99f82aae8d5");
      console.log(image)
      var formdata = new FormData();
      formdata.append("files", image);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

    fetch("http://localhost:1337/api/upload/", requestOptions)
      .then(response => response.text())
      .then(result =>{
        const output = JSON.parse(result);
        console.log(output[0].id);

        ApplicantImageId(output[0].id);
      })
      .catch(error => console.log('error', error));
    changeActive(2);
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
    return (
      <div className="container">
        <div className="d-flex">
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
      </div>
    );
  };
  

export default Step2