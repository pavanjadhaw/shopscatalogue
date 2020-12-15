import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "site" */
  delete_site?: Maybe<Site_Mutation_Response>;
  /** delete single row from the table: "site" */
  delete_site_by_pk?: Maybe<Site>;
  /** insert data into the table: "site" */
  insert_site?: Maybe<Site_Mutation_Response>;
  /** insert a single row into the table: "site" */
  insert_site_one?: Maybe<Site>;
  /** update data of the table: "site" */
  update_site?: Maybe<Site_Mutation_Response>;
  /** update single row of the table: "site" */
  update_site_by_pk?: Maybe<Site>;
};


/** mutation root */
export type Mutation_RootDelete_SiteArgs = {
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Site_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_SiteArgs = {
  objects: Array<Site_Insert_Input>;
  on_conflict?: Maybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Site_OneArgs = {
  object: Site_Insert_Input;
  on_conflict?: Maybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SiteArgs = {
  _inc?: Maybe<Site_Inc_Input>;
  _set?: Maybe<Site_Set_Input>;
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Site_By_PkArgs = {
  _inc?: Maybe<Site_Inc_Input>;
  _set?: Maybe<Site_Set_Input>;
  pk_columns: Site_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
};


/** query root */
export type Query_RootSiteArgs = {
  distinct_on?: Maybe<Array<Site_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Site_Order_By>>;
  where?: Maybe<Site_Bool_Exp>;
};


/** query root */
export type Query_RootSite_AggregateArgs = {
  distinct_on?: Maybe<Array<Site_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Site_Order_By>>;
  where?: Maybe<Site_Bool_Exp>;
};


/** query root */
export type Query_RootSite_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "site" */
export type Site = {
  __typename?: 'site';
  category: Scalars['String'];
  category_normalized: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

/** aggregated selection of "site" */
export type Site_Aggregate = {
  __typename?: 'site_aggregate';
  aggregate?: Maybe<Site_Aggregate_Fields>;
  nodes: Array<Site>;
};

/** aggregate fields of "site" */
export type Site_Aggregate_Fields = {
  __typename?: 'site_aggregate_fields';
  avg?: Maybe<Site_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Site_Max_Fields>;
  min?: Maybe<Site_Min_Fields>;
  stddev?: Maybe<Site_Stddev_Fields>;
  stddev_pop?: Maybe<Site_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Site_Stddev_Samp_Fields>;
  sum?: Maybe<Site_Sum_Fields>;
  var_pop?: Maybe<Site_Var_Pop_Fields>;
  var_samp?: Maybe<Site_Var_Samp_Fields>;
  variance?: Maybe<Site_Variance_Fields>;
};


/** aggregate fields of "site" */
export type Site_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Site_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "site" */
export type Site_Aggregate_Order_By = {
  avg?: Maybe<Site_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Site_Max_Order_By>;
  min?: Maybe<Site_Min_Order_By>;
  stddev?: Maybe<Site_Stddev_Order_By>;
  stddev_pop?: Maybe<Site_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Site_Stddev_Samp_Order_By>;
  sum?: Maybe<Site_Sum_Order_By>;
  var_pop?: Maybe<Site_Var_Pop_Order_By>;
  var_samp?: Maybe<Site_Var_Samp_Order_By>;
  variance?: Maybe<Site_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "site" */
export type Site_Arr_Rel_Insert_Input = {
  data: Array<Site_Insert_Input>;
  on_conflict?: Maybe<Site_On_Conflict>;
};

/** aggregate avg on columns */
export type Site_Avg_Fields = {
  __typename?: 'site_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "site" */
export type Site_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "site". All fields are combined with a logical 'AND'. */
export type Site_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Site_Bool_Exp>>>;
  _not?: Maybe<Site_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Site_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  category_normalized?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "site" */
export enum Site_Constraint {
  /** unique or primary key constraint */
  SiteIdKey = 'site_id_key',
  /** unique or primary key constraint */
  SitePkey = 'site_pkey',
  /** unique or primary key constraint */
  SiteUrlKey = 'site_url_key'
}

/** input type for incrementing integer column in table "site" */
export type Site_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "site" */
export type Site_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  category_normalized?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Site_Max_Fields = {
  __typename?: 'site_max_fields';
  category?: Maybe<Scalars['String']>;
  category_normalized?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "site" */
export type Site_Max_Order_By = {
  category?: Maybe<Order_By>;
  category_normalized?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Site_Min_Fields = {
  __typename?: 'site_min_fields';
  category?: Maybe<Scalars['String']>;
  category_normalized?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "site" */
export type Site_Min_Order_By = {
  category?: Maybe<Order_By>;
  category_normalized?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "site" */
export type Site_Mutation_Response = {
  __typename?: 'site_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Site>;
};

/** input type for inserting object relation for remote table "site" */
export type Site_Obj_Rel_Insert_Input = {
  data: Site_Insert_Input;
  on_conflict?: Maybe<Site_On_Conflict>;
};

/** on conflict condition type for table "site" */
export type Site_On_Conflict = {
  constraint: Site_Constraint;
  update_columns: Array<Site_Update_Column>;
  where?: Maybe<Site_Bool_Exp>;
};

/** ordering options when selecting data from "site" */
export type Site_Order_By = {
  category?: Maybe<Order_By>;
  category_normalized?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "site" */
export type Site_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "site" */
export enum Site_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CategoryNormalized = 'category_normalized',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "site" */
export type Site_Set_Input = {
  category?: Maybe<Scalars['String']>;
  category_normalized?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Site_Stddev_Fields = {
  __typename?: 'site_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "site" */
export type Site_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Site_Stddev_Pop_Fields = {
  __typename?: 'site_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "site" */
export type Site_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Site_Stddev_Samp_Fields = {
  __typename?: 'site_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "site" */
export type Site_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Site_Sum_Fields = {
  __typename?: 'site_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "site" */
export type Site_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "site" */
export enum Site_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CategoryNormalized = 'category_normalized',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Site_Var_Pop_Fields = {
  __typename?: 'site_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "site" */
export type Site_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Site_Var_Samp_Fields = {
  __typename?: 'site_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "site" */
export type Site_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Site_Variance_Fields = {
  __typename?: 'site_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "site" */
export type Site_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
};


/** subscription root */
export type Subscription_RootSiteArgs = {
  distinct_on?: Maybe<Array<Site_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Site_Order_By>>;
  where?: Maybe<Site_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSite_AggregateArgs = {
  distinct_on?: Maybe<Array<Site_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Site_Order_By>>;
  where?: Maybe<Site_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSite_By_PkArgs = {
  id: Scalars['Int'];
};

export type AggregateCountFragment = (
  { __typename?: 'site_aggregate' }
  & { aggregate?: Maybe<(
    { __typename?: 'site_aggregate_fields' }
    & Pick<Site_Aggregate_Fields, 'count'>
  )> }
);

export type SiteSnippetFragment = (
  { __typename?: 'site' }
  & Pick<Site, 'id' | 'name' | 'url' | 'description' | 'category' | 'category_normalized'>
);

export type SiteByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SiteByIdQuery = (
  { __typename?: 'query_root' }
  & { site_by_pk?: Maybe<(
    { __typename?: 'site' }
    & SiteSnippetFragment
  )> }
);

export type SitesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type SitesQuery = (
  { __typename?: 'query_root' }
  & { site_aggregate: (
    { __typename?: 'site_aggregate' }
    & AggregateCountFragment
  ), site: Array<(
    { __typename?: 'site' }
    & SiteSnippetFragment
  )> }
);

export type SitesByCategoryQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  category_normalized: Scalars['String'];
}>;


export type SitesByCategoryQuery = (
  { __typename?: 'query_root' }
  & { site_aggregate: (
    { __typename?: 'site_aggregate' }
    & AggregateCountFragment
  ), site: Array<(
    { __typename?: 'site' }
    & SiteSnippetFragment
  )> }
);

export const AggregateCountFragmentDoc = gql`
    fragment AggregateCount on site_aggregate {
  aggregate {
    count
  }
}
    `;
export const SiteSnippetFragmentDoc = gql`
    fragment SiteSnippet on site {
  id
  name
  url
  description
  category
  category_normalized
}
    `;
export const SiteByIdDocument = gql`
    query SiteById($id: Int!) {
  site_by_pk(id: $id) {
    ...SiteSnippet
  }
}
    ${SiteSnippetFragmentDoc}`;

/**
 * __useSiteByIdQuery__
 *
 * To run a query within a React component, call `useSiteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSiteByIdQuery(baseOptions: Apollo.QueryHookOptions<SiteByIdQuery, SiteByIdQueryVariables>) {
        return Apollo.useQuery<SiteByIdQuery, SiteByIdQueryVariables>(SiteByIdDocument, baseOptions);
      }
export function useSiteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SiteByIdQuery, SiteByIdQueryVariables>) {
          return Apollo.useLazyQuery<SiteByIdQuery, SiteByIdQueryVariables>(SiteByIdDocument, baseOptions);
        }
export type SiteByIdQueryHookResult = ReturnType<typeof useSiteByIdQuery>;
export type SiteByIdLazyQueryHookResult = ReturnType<typeof useSiteByIdLazyQuery>;
export type SiteByIdQueryResult = Apollo.QueryResult<SiteByIdQuery, SiteByIdQueryVariables>;
export const SitesDocument = gql`
    query Sites($limit: Int!, $offset: Int!) {
  site_aggregate {
    ...AggregateCount
  }
  site(limit: $limit, offset: $offset) {
    ...SiteSnippet
  }
}
    ${AggregateCountFragmentDoc}
${SiteSnippetFragmentDoc}`;

/**
 * __useSitesQuery__
 *
 * To run a query within a React component, call `useSitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSitesQuery(baseOptions: Apollo.QueryHookOptions<SitesQuery, SitesQueryVariables>) {
        return Apollo.useQuery<SitesQuery, SitesQueryVariables>(SitesDocument, baseOptions);
      }
export function useSitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitesQuery, SitesQueryVariables>) {
          return Apollo.useLazyQuery<SitesQuery, SitesQueryVariables>(SitesDocument, baseOptions);
        }
export type SitesQueryHookResult = ReturnType<typeof useSitesQuery>;
export type SitesLazyQueryHookResult = ReturnType<typeof useSitesLazyQuery>;
export type SitesQueryResult = Apollo.QueryResult<SitesQuery, SitesQueryVariables>;
export const SitesByCategoryDocument = gql`
    query SitesByCategory($limit: Int!, $offset: Int!, $category_normalized: String!) {
  site_aggregate(where: {category_normalized: {_eq: $category_normalized}}) {
    ...AggregateCount
  }
  site(
    limit: $limit
    offset: $offset
    where: {category_normalized: {_eq: $category_normalized}}
  ) {
    ...SiteSnippet
  }
}
    ${AggregateCountFragmentDoc}
${SiteSnippetFragmentDoc}`;

/**
 * __useSitesByCategoryQuery__
 *
 * To run a query within a React component, call `useSitesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitesByCategoryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      category_normalized: // value for 'category_normalized'
 *   },
 * });
 */
export function useSitesByCategoryQuery(baseOptions: Apollo.QueryHookOptions<SitesByCategoryQuery, SitesByCategoryQueryVariables>) {
        return Apollo.useQuery<SitesByCategoryQuery, SitesByCategoryQueryVariables>(SitesByCategoryDocument, baseOptions);
      }
export function useSitesByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitesByCategoryQuery, SitesByCategoryQueryVariables>) {
          return Apollo.useLazyQuery<SitesByCategoryQuery, SitesByCategoryQueryVariables>(SitesByCategoryDocument, baseOptions);
        }
export type SitesByCategoryQueryHookResult = ReturnType<typeof useSitesByCategoryQuery>;
export type SitesByCategoryLazyQueryHookResult = ReturnType<typeof useSitesByCategoryLazyQuery>;
export type SitesByCategoryQueryResult = Apollo.QueryResult<SitesByCategoryQuery, SitesByCategoryQueryVariables>;