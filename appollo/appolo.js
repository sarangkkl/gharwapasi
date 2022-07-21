import { ApolloClient, createHttpLink, InMemoryCache,gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';




const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token ="65f5cc9490ac47882b2c52e6e5c388dd3324aa3d615753dc55fed8a699a5b4c21fbf333d039055106d997fc9cde8986bce97e948aa204f9c093fca2fae2936978113275482f3a60f6f000433fdf1ddfccbec56c270d186105d39de3e4ed1eb7f5f69db46785a8a04202e3cae6e41799be5143fc739fa1d800d9bd99f82aae8d5";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export {
  client,gql
}