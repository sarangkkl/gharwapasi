import { client,gql } from '../appolo';

export const getBlogs = async(page)=>{
    const {data} = await client.query({
        query: gql`query Blogs($pagination: PaginationArg, $filters: BlogFiltersInput) {
            blogs(pagination: $pagination, filters: $filters) {
              data {
                id
                attributes {
                  title
                  slug
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  description
                  comments
                  body
                }
              }
              meta {
                pagination {
                  total
                  page
                  pageSize
                }
              }
            }
          }`,variables:{
            "pagination": {
              "page": page,
              "pageSize": 6,
              
            },
            "filters": null
          }
    })

    return data.blogs.data;
}