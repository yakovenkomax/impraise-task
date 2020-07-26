import { Exact, Maybe, Organization, PageInfo, Repository, Scalars } from 'types/schema.types';

export type GetOrganizationQueryVariables = Exact<{
  login: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type GetOrganizationQuery = (
  { __typename?: 'Query' }
  & { organization?: Maybe<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'name' | 'location' | 'websiteUrl'>
    & { repositories: (
      { __typename?: 'RepositoryConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'RepositoryEdge' }
        & { node?: Maybe<(
          { __typename?: 'Repository' }
          & Pick<Repository, 'id' | 'name'>
          )> }
        )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
        ) }
      ) }
    )> }
  );
