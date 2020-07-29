import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { IGetOrganizationQuery, IGetOrganizationQueryVariables } from 'types/operations.types';
import { useParams } from 'react-router-dom';
import Text from 'components/Text/Text';
import RepositoryList from 'components/RepositoryList/RepositoryList';
import PinnedRepositoryList from 'components/PinnedRepositoryList/PinnedRepositoryList';

import s from './OrganizationPage.module.css';
import Icon from 'components/Icon/Icon';


const GetOrganization = loader('src/operations/GetOrganization.graphql');

const OrganizationPage = () => {
  const { login = '' } = useParams();
  const { loading, data, error, fetchMore } = useQuery<IGetOrganizationQuery, IGetOrganizationQueryVariables>(
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

  const { name, location, avatarUrl, websiteUrl, repositories, pinnedItems } = organization;

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

  const pinnedRepositoryList = pinnedItems.edges?.map(edge => {
    if (edge?.node?.__typename !== 'Repository') {
      return null;
    }

    return edge?.node;
  }).filter(Boolean);

  const repositoryList = repositories.edges?.map(edge => edge?.node).filter(Boolean);

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.avatar}>
          <img className={s.image} src={avatarUrl} alt="" />
        </div>
        <div className={s.info}>
          <Text block size="h1" className={s.title}>{ name }</Text>
          <Text block size="small">
            <Icon icon="location" />
            { location }
          </Text>
          <Text block size="small">
            <Icon icon="link" />
            { websiteUrl }
          </Text>
        </div>
      </div>
      <PinnedRepositoryList pinnedRepositoryList={pinnedRepositoryList} />
      <RepositoryList repositoryList={repositoryList} />
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default OrganizationPage;