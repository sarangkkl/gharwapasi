import { Navbar, Footer } from "../components";
import "bootstrap/dist/css/bootstrap.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../appollo/appolo";
import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="twakid"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/62d4e3dbb0d10b6f3e7cd1c2/1g87pk4uc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
        }}
      />
      <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0&appId=927762731423526&autoLogAppEvents=1" nonce="En2o8DjN"/>
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}

export default MyApp;
