import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import '../components/masnory/index.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
