import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Sites from '../../../components/sites';
import metadata from '../../../constants/metadata.json';
import withApollo from '../../../utils/withApollo';

function Index() {
  const {
    query: { page },
  } = useRouter();

  return (
    <>
      <Head>
        <title key="title">{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Sites page={parseInt(page as string)} />
    </>
  );
}

export default withApollo({ ssr: true })(Index);
