import { ApolloClient, createHttpLink, InMemoryCache,gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';




const httpLink = createHttpLink({
  uri: 'https://seal-app-k7j9v.ondigitalocean.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token ="97191c96fee1c94443871ffb1602882a163880472d935b2073a4c89c5b2b9c6414b71b0a9dce8bcc495233b19a574217d48ba00b76caa82457ff1190529b7049645bb43ad1d6abb50b1663f0480583f5af08df9cba1265490a38c8338732f8283978d32f200541390e6c68fcbf0db271739001fc46bd089cbe2fa7ff13ca169f";
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

const BACKEND_URL = "https://seal-app-k7j9v.ondigitalocean.app/api/upload";
const BACKEND_TOKEN = "97191c96fee1c94443871ffb1602882a163880472d935b2073a4c89c5b2b9c6414b71b0a9dce8bcc495233b19a574217d48ba00b76caa82457ff1190529b7049645bb43ad1d6abb50b1663f0480583f5af08df9cba1265490a38c8338732f8283978d32f200541390e6c68fcbf0db271739001fc46bd089cbe2fa7ff13ca169f";

export {
  client,gql,BACKEND_URL,BACKEND_TOKEN
}