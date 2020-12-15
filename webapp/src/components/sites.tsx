import React from 'react';
import { limit } from '../constants';
import { useSitesQuery } from '../generated/graphql';
import useErrorAlert from '../hooks/use-error-alert';
import Header from './header';
import SitesList from './sites-list';

type SitesProp = {
  page?: number;
};

function Sites({ page = 1 }: SitesProp) {
  const { data, error, loading } = useSitesQuery({
    variables: {
      limit,
      offset: limit * page - limit,
    },
  });

  const showErrorAlert = useErrorAlert();
  showErrorAlert(error);

  return data?.site?.length ? (
    <SitesList
      loading={loading}
      sites={data.site}
      count={data.site_aggregate?.aggregate?.count}
      page={page}
      prefix={`/sites/page`}
    />
  ) : (
    <>{!loading && <Header>Seems like there are no site listings.</Header>}</>
  );
}

export default Sites;
