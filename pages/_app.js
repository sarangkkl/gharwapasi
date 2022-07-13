import { Navbar,Footer } from '../components';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../appollo/appolo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  )
}

export default MyApp
