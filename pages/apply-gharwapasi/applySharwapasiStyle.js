import styled from "styled-components";

export const CoverImg = styled.img`
    width: 100%;
    height:50vh;
    object-fit: cover;
    @media (max-width: 768px) {
        height: 40vh;
    }
`;