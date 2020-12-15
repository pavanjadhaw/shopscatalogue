import { Button, chakra } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import React from 'react';
import { categoriesMap, limit } from '../constants';
import { useSitesByCategoryQuery } from '../generated/graphql';
import useErrorAlert from '../hooks/use-error-alert';
import Header from './header';
import SitesList from './sites-list';

type SitesByCategoryProps = {
  slug: string;
  page?: number;
};

function SitesByCategory({ slug, page = 1 }: SitesByCategoryProps) {
  const { data, error, loading } = useSitesByCategoryQuery({
    variables: {
      limit,
      offset: limit * page - limit,
      category_normalized: slug,
    },
  });

  const showErrorAlert = useErrorAlert();
  showErrorAlert(error);

  if (!categoriesMap[slug]) {
    return (
      <Header>
        Seems like this category no longer exists <br />
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
    );
  }

  return (
    <>
      <Header>
        <chakra.span aria-hidden m={2}>
          {categoriesMap[slug]['emoji']}
        </chakra.span>{' '}
        {categoriesMap[slug]['title']}
      </Header>

      {data?.site?.length ? (
        <SitesList
          loading={loading}
          sites={data?.site}
          count={data?.site_aggregate?.aggregate?.count}
          page={page}
          prefix={`/category/${slug}/page`}
        />
      ) : (
        <>{!loading && <Header>No sites for category!</Header>}</>
      )}
    </>
  );
}

export default SitesByCategory;
