import React,{useState} from "react";
import { crousal1,crousal2,crousal3,crousal4,crousal5 } from '../../assets/images';
import { HideBox,CustomImageDiv,ActionContainer } from '../styledComponents/basicui';
import { ArrowForwardIosIcon,ArrowBackIosIcon } from '../../assets/icons';
import { IconButton } from '../../assets';
import { CustomImage } from '../'

const Crousal = () => {
    const crousalArray = [crousal1,crousal2,crousal3,crousal4,crousal5]
    const [index,setIndex] = useState(0);

    const toggleImg = (type)=>{
        if(type === "INC"){
            if(index === crousalArray.length-1){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
        }else{
            if(index === 0){
                setIndex(crousalArray.length-1);
            }else{
                setIndex(index-1);
            }
        }
    }
  return (
    <div >
        <CustomImageDiv>
            <CustomImage src={crousalArray[index].src}/>
            <ActionContainer>
                <IconButton onClick={()=>{toggleImg("INC")}}>
                    <ArrowBackIosIcon color="error"/>
                </IconButton>
                <IconButton onClick={()=>{toggleImg("DEC")}}>
                    <ArrowForwardIosIcon color="error"/>
                </IconButton>
            </ActionContainer>
        </CustomImageDiv>

        <HideBox>
            {crousalArray.map((item,index)=>{
                <img src={item.src} alt="The mission Gharwapasi" key={index}/>
            })}
        </HideBox>
    </div>
  );
};

export default Crousal;
