import {
  Exact,
  ILanguage,
  ILicense,
  IOrganization,
  IPageInfo,
  IRepository,
  Maybe,
  Scalars,
  IStargazerConnection,
  IRepositoryConnection,
} from 'types/schema.types';

export type IGetOrganizationQueryVariables = Exact<{
  login: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type IGetOrganizationQuery = (
  { __typename?: 'Query' }
  & { organization?: Maybe<(
    { __typename?: 'Organization' }
    & Pick<IOrganization, 'name' | 'location' | 'avatarUrl' | 'websiteUrl'>
    & { pinnedItems: (
      { __typename?: 'PinnableItemConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'PinnableItemEdge' }
        & { node?: Maybe<{ __typename?: 'Gist' } | (
          { __typename?: 'Repository' }
          & IRepositoryFieldsFragment
          )> }
        )>>> }
      ), repositories: (
      { __typename?: 'RepositoryConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'RepositoryEdge' }
        & { node?: Maybe<(
          { __typename?: 'Repository' }
          & Pick<IRepository, 'updatedAt'>
          & { parent?: Maybe<(
            { __typename?: 'Repository' }
            & Pick<IRepository, 'nameWithOwner'>
            )>, licenseInfo?: Maybe<(
            { __typename?: 'License' }
            & Pick<ILicense, 'spdxId'>
            )> }
          & IRepositoryFieldsFragment
          )> }
        )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<IPageInfo, 'hasNextPage' | 'endCursor'>
        ) }
      ) }
    )> }
  );

export type IRepositoryFieldsFragment = (
  { __typename?: 'Repository' }
  & Pick<IRepository, 'id' | 'name' | 'description'>
  & { primaryLanguage?: Maybe<(
    { __typename?: 'Language' }
    & Pick<ILanguage, 'color' | 'name'>
    )>, stargazers: (
    { __typename?: 'StargazerConnection' }
    & Pick<IStargazerConnection, 'totalCount'>
    ), forks: (
    { __typename?: 'RepositoryConnection' }
    & Pick<IRepositoryConnection, 'totalCount'>
    ) }
  );
