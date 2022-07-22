import styled from "styled-components";
import { sizes,colors } from "../../styles/styles";
export const MainConatainer = styled.div`
  margin-top: 70px;
  width:95%;
  margin-left:auto;
  margin-right:auto;
`;

export const FooterLinks = styled.div`
  & p {
    font-size: 1.2rem;
    font-weight: bold;
    color: brown;
  }
  & a {
    color: #ff6a6a;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;

export const HideBox = styled.div`
  display: none;
`;


export const ActionContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 40%;
  width:55%;
`;
export const CustomImageDiv = styled.div`
  
  & img {
    width: 100%;
    height: 70vh;

    @media (max-width: 768px) {
      height: 20vh;
    }
  }
`;


export const FbBanner = styled.div`
  @media (max-width: ${sizes.tablet}) {
    display: none;
  }
`;

export const CustomButton = styled.button`
  background-color: ${colors.red};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width:${props => (props.full ? "100%" : "auto")};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`

export const FullButton = styled(CustomButton)`
  width: 100%;
  margin-top: 10px;
`;

export const CaseFilterContainer = styled.div`
    margin-right: 10px;

`;

export const CoverImg = styled.img`
    width: 100%;
    height:50vh;
    object-fit: cover;
    @media (max-width: 768px) {
        height: 40vh;
    }
`;

