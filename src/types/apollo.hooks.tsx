import * as Types from './operations.types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const RepositoryFieldsFragmentDoc = gql`
    fragment repositoryFields on Repository {
  id
  name
  description
  primaryLanguage {
    color
    name
  }
  stargazers {
    totalCount
  }
  forks {
    totalCount
  }
}
    `;
export const GetOrganizationDocument = gql`
    query GetOrganization($login: String!, $cursor: String) {
  organization(login: $login) {
    name
    location
    avatarUrl
    websiteUrl
    pinnedItems(types: REPOSITORY, first: 3) {
      edges {
        node {
          ... on Repository {
            ...repositoryFields
          }
        }
      }
    }
    repositories(first: 5, after: $cursor) {
      edges {
        node {
          ...repositoryFields
          updatedAt
          parent {
            nameWithOwner
          }
          licenseInfo {
            spdxId
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
    ${RepositoryFieldsFragmentDoc}`;

/**
 * __useGetOrganizationQuery__
 *
 * To run a query within a React component, call `useGetOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationQuery({
 *   variables: {
 *      login: // value for 'login'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetOrganizationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetOrganizationQuery, Types.GetOrganizationQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetOrganizationQuery, Types.GetOrganizationQueryVariables>(GetOrganizationDocument, baseOptions);
      }
export function useGetOrganizationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetOrganizationQuery, Types.GetOrganizationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetOrganizationQuery, Types.GetOrganizationQueryVariables>(GetOrganizationDocument, baseOptions);
        }
export type GetOrganizationQueryHookResult = ReturnType<typeof useGetOrganizationQuery>;
export type GetOrganizationLazyQueryHookResult = ReturnType<typeof useGetOrganizationLazyQuery>;
export type GetOrganizationQueryResult = ApolloReactCommon.QueryResult<Types.GetOrganizationQuery, Types.GetOrganizationQueryVariables>;