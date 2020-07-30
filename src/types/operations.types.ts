import * as Types from './schema.types';


export type GetOrganizationQueryVariables = Types.Exact<{
  login: Types.Scalars['String'];
  cursor?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetOrganizationQuery = (
  { __typename?: 'Query' }
  & { organization?: Types.Maybe<(
    { __typename?: 'Organization' }
    & Pick<Types.Organization, 'name' | 'location' | 'avatarUrl' | 'websiteUrl'>
    & { pinnedItems: (
      { __typename?: 'PinnableItemConnection' }
      & { nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Gist' } | (
        { __typename?: 'Repository' }
        & RepositoryFieldsFragment
      )>>> }
    ), repositories: (
      { __typename?: 'RepositoryConnection' }
      & { nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Repository' }
        & Pick<Types.Repository, 'updatedAt'>
        & { parent?: Types.Maybe<(
          { __typename?: 'Repository' }
          & Pick<Types.Repository, 'nameWithOwner'>
        )>, licenseInfo?: Types.Maybe<(
          { __typename?: 'License' }
          & Pick<Types.License, 'spdxId'>
        )> }
        & RepositoryFieldsFragment
      )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<Types.PageInfo, 'hasNextPage' | 'endCursor'>
      ) }
    ) }
  )> }
);

export type RepositoryFieldsFragment = (
  { __typename?: 'Repository' }
  & Pick<Types.Repository, 'id' | 'name' | 'description'>
  & { primaryLanguage?: Types.Maybe<(
    { __typename?: 'Language' }
    & Pick<Types.Language, 'color' | 'name'>
  )>, stargazers: (
    { __typename?: 'StargazerConnection' }
    & Pick<Types.StargazerConnection, 'totalCount'>
  ), forks: (
    { __typename?: 'RepositoryConnection' }
    & Pick<Types.RepositoryConnection, 'totalCount'>
  ) }
);
