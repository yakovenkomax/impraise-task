import {
  Exact, Gist,
  Language, License,
  Maybe,
  Organization,
  PageInfo,
  Repository, RepositoryConnection,
  Scalars,
  StargazerConnection,
} from 'types/schema.types';

export type GetOrganizationQueryVariables = Exact<{
  login: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type GetOrganizationQuery = (
  { __typename?: 'Query' }
  & { organization?: Maybe<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'name' | 'location' | 'avatarUrl' | 'websiteUrl'>
    & { pinnedItems: (
      { __typename?: 'PinnableItemConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'PinnableItemEdge' }
        & { node?: Maybe<{ __typename?: 'Gist' } | (
          { __typename?: 'Repository' }
          & RepositoryFieldsFragment
          )> }
        )>>> }
      ), repositories: (
      { __typename?: 'RepositoryConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'RepositoryEdge' }
        & { node?: Maybe<(
          { __typename?: 'Repository' }
          & Pick<Repository, 'updatedAt'>
          & { parent?: Maybe<(
            { __typename?: 'Repository' }
            & Pick<Repository, 'nameWithOwner'>
            )>, licenseInfo?: Maybe<(
            { __typename?: 'License' }
            & Pick<License, 'spdxId'>
            )> }
          & RepositoryFieldsFragment
          )> }
        )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
        ) }
      ) }
    )> }
  );

export type RepositoryFieldsFragment = (
  { __typename?: 'Repository' }
  & Pick<Repository, 'id' | 'name' | 'description'>
  & { primaryLanguage?: Maybe<(
    { __typename?: 'Language' }
    & Pick<Language, 'color' | 'name'>
    )>, stargazers: (
    { __typename?: 'StargazerConnection' }
    & Pick<StargazerConnection, 'totalCount'>
    ), forks: (
    { __typename?: 'RepositoryConnection' }
    & Pick<RepositoryConnection, 'totalCount'>
    ) }
  );
