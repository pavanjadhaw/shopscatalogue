import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import SiteDetailed from '../../components/site-detailed';
import metadata from '../../constants/metadata.json';
import { useSiteByIdQuery } from '../../generated/graphql';
import useErrorAlert from '../../hooks/use-error-alert';
import withApollo from '../../utils/withApollo';

function Site() {
  const {
    query: { id },
  } = useRouter();

  const { data, error, loading } = useSiteByIdQuery({
    variables: { id: parseInt(id as string) },
    skip: !id,
  });

  const showErrorAlert = useErrorAlert();
  showErrorAlert(error);

  return (
    <>
      <Head>
        <title key="title">Site {metadata.titleSuffix}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {data?.site_by_pk ? (
        <SiteDetailed site={data.site_by_pk} />
      ) : (
        <>
          {!loading && (
            <Header>
              404 | site doesn't exist <br />
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  mt={10}
                  colorScheme="pink"
                  size="lg"
                  variant="outline"
                  rounded="sm"
                  _hover={{
                    boxShadow: 'xl',
                  }}
                >
                  Home
                </Button>
              </NextLink>
            </Header>
          )}
        </>
      )}
    </>
  );
}

export default withApollo({ ssr: true })(Site);
