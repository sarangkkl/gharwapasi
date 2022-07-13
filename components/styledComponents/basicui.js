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
