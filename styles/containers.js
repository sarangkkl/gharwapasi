import styled from "styled-components";
import { sizes } from './styles'

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column;
    }

`;

export const HeroImage = styled.div`
    width: 80%;
    @media (max-width: ${sizes.tablet}) {
        width: 100%;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    @media (max-width: ${sizes.desktop}) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: ${sizes.laptopL}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${sizes.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${sizes.tablet}) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: ${sizes.mobileL}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;