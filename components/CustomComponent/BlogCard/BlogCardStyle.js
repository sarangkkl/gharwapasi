import styled from "styled-components";
import { colors } from '../../../styles/styles'

export const BlogCardContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6e6e6;

    & img{
        width: 100%;
        height: 250px;
    }
`;

export const BlogCardDescription = styled.div`
    padding: 10px;
    & h5{
        font-size: 1.3rem;
    }

    & p{
        font-size: 14px;
    }

    & a{
        color: ${colors.red};
        text-decoration: none;
        :hover{
            text-decoration: underline;
            color: ${colors.dark};
        }
    }
`;