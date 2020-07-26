import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { GetOrganizationQuery, GetOrganizationQueryVariables } from 'types/operations.types';


const GetOrganization = loader('src/operations/GetOrganization.graphql');

type Props = {
  login: string,
}

const OrganizationPage: React.FC<Props> = (props) => {
  const { login } = props;
  const { loading, data, error, fetchMore } = useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(
    GetOrganization,
    { variables: { login } }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) {
    return null;
  }

  const { organization } = data;

  if (!organization) {
    return null;
  }

  const { name, location, websiteUrl, repositories } = organization;

  const loadMore = () => {
    fetchMore({
      variables: {
        login,
        cursor: data?.organization?.repositories.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        if (fetchMoreResult?.organization?.repositories.edges) {
          fetchMoreResult.organization.repositories.edges = [
            ...previousResult?.organization?.repositories.edges || [],
            ...fetchMoreResult.organization.repositories.edges,
          ];
        }

        return fetchMoreResult;
      },
    });
  }

  return (
    <div className="OrganizationPage">
      <div>Name: { name }</div>
      <div>Location: { location }</div>
      <div>WebsiteUrl: { websiteUrl }</div>
      <ul>
        { repositories.edges?.map(edge => (
          <li key={edge?.node?.id}>{ edge?.node?.name }</li>
        )) }
      </ul>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default OrganizationPage;
