import React from 'react'
import { MainConatainer,ReportCase } from "../../components";
import { Box50,FlexBox} from '../../styles/containers';
import Data from './component/Data';


const AddNewCase = () => {

    
  return (
    <MainConatainer>
        <FlexBox>
            <Box50>        
                <ReportCase/>  
            </Box50>
            <Data/>
        </FlexBox>
    </MainConatainer>
  )
}

export default AddNewCase