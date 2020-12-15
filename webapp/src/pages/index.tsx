import Head from 'next/head';
import Header from '../components/header';
import Sites from '../components/sites';
import metadata from '../constants/metadata.json';
import withApollo from '../utils/withApollo';

function Home() {
  return (
    <>
      <Head>
        <title key="title">{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Header>A community of more than 2k small ecommerce stores ❤</Header>
      <Sites />
    </>
  );
}

export default withApollo({ ssr: true })(Home);
