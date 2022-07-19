import React from 'react';
import styled,{keyframes} from 'styled-components';


const forwardAnimatin = keyframes`
  0%{
    transform:translateX(20%);
  }100%{
    transform:translateX(0); 
  }
`;
const backwardAnimatin = keyframes`
  0%{
    transform:translateX(-20%);
  }100%{
    transform:translateX(0); 
  }
`;

const CustomImageDiv = styled.div`
    & img {
      animation: ${forwardAnimatin} 1s ease-in-out;
      width: 100%;
      height: 70vh;
  
      @media (max-width: 768px) {
        height: 20vh;
      }
    }
`;

const CustomImage = ({src}) => {
  return (
    <CustomImageDiv>
        <img src={src} alt="Mission Gharwapasi" />
    </CustomImageDiv>
  )
}

export default CustomImage