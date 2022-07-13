import { client,gql } from '../appolo';

export const getExshow = async()=>{
    const {data} = await client.query({
        query: gql`
        query Attributes($pagination: PaginationArg) {
            exshows(pagination: $pagination) {
              data {
                attributes {
                  title
                  video
                }
              }
            }
          }
        `,variables:{"pagination": {
            "pageSize": 6
          }}
    })
    return data.exshows.data;
}


export const CREATE_CONTACT = gql`
mutation Mutation($data: ContactInput!) {
  createContact(data: $data) {
    data {
      id
      attributes {
        name
        email
        createdAt
      }
    }
  }
}
`;