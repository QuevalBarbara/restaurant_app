import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer"

const API_URL = process.env.STRAPI_URL || "https://strapi-b4ct.onrender.com";

export const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer/>
        <br/>
      </AppProvider>
    </ApolloProvider>
  );
}
