import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Container from './container';
import Footer from './footer';
import Navbar from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Flex direction="column" minHeight="100vh">
        <Navbar />

        <Container as="main" id="main-content" bgColor="#f4f8fc">
          {children}
        </Container>

        <Footer />
      </Flex>
    </>
  );
}

export default Layout;
