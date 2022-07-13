import styled from "styled-components";

const screenSize = {
    xs:'0px',
    sm:'600px',
    md:'900px',
    lg:'1200px',
    xl:'1536px'
}

export const MainContainer = styled.div`
    width:95%;
    margin: 65px auto;
`;

export const Box1 = styled.div`
    width:100%;

    @media (min-width: ${screenSize.md}) {
        width:45%;
    }
`;
