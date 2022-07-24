import { gql } from '../appolo';
export const createCase = gql`
mutation CreateCase($data: CaseInput!) {
    createCase(data: $data) {
      data {
        id
        attributes {
          title
          category
          body
          ShortDescription
          IncidenDate
          State
          City
          Country
          RefrenceDescription
        }
      }
    }
  }
`;