import { gql } from '../appolo';

export const applyGharwapasi = gql`
mutation CreateGharwapasiApplication($data: GharwapasiApplicationInput!) {
  createGharwapasiApplication(data: $data) {
    data {
      id
      
    }
  }
}
`;