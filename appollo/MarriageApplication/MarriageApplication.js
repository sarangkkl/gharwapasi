import { gql } from '../appolo';

export const marriageApplication = gql`
mutation CreateMarriageApplication($data: MarriageApplicationInput!) {
    createMarriageApplication(data: $data) {
      data {
        id
      }
    }
  }
`;