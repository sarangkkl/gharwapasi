import styled from "styled-components";

export const MainConatainer = styled.div`
  margin-top: 70px;
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
  top: 40%;
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
