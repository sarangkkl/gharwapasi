import { gql } from '../appolo';

export const uploadImage = gql`
mutation Upload($file: Upload!, $refId: ID, $ref: String, $field: String) {
    upload(file: $file, refId: $refId, ref: $ref, field: $field) {
      data {
        id
      }
    }
  }
`;