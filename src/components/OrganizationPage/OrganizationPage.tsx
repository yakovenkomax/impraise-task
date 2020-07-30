import LoadingPlaceholder from 'components/LoadingPlaceholder/LoadingPlaceholder';
import Tag from 'components/Tag/Tag';
import React from 'react';
import { useParams } from 'react-router-dom';
import Text from 'components/Text/Text';
import RepositoryList from 'components/RepositoryList/RepositoryList';
import ErrorPlaceholder from 'components/ErrorPlaceholder/ErrorPlaceholder';
import PinnedRepositoryList from 'components/PinnedRepositoryList/PinnedRepositoryList';
import { useGetOrganizationQuery } from 'types/apollo.hooks';

import s from './OrganizationPage.module.css';


const OrganizationPage = () => {
  const { login } = useParams();
  const { loading, data, error, fetchMore } = useGetOrganizationQuery({
    skip: !login,
    variables: { login },
  });

  if (!login || typeof login !== 'string') return null; // will redirect to HomePage by router
  if (loading) return <LoadingPlaceholder />;
  if (error || !data?.organization) return <ErrorPlaceholder />;

  const { organization } = data;
  const { name, location, avatarUrl, websiteUrl, repositories, pinnedItems } = organization;

  if (name) {
    document.title = name;
  }

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
        { avatarUrl && (
          <div className={s.avatar}>
            <img className={s.image} src={avatarUrl} alt="" />
          </div>
        )}
        <div>
          <Text block size="h1">{ name }</Text>
          <Tag icon="location" className={s.location}>
            { location }
          </Tag>
          <Tag icon="link" linkProps={{ fake: true }} className={s.websiteUrl}>
            { websiteUrl }
          </Tag>
        </div>
      </div>
      <PinnedRepositoryList pinnedRepositoryList={pinnedRepositoryList} />
      <RepositoryList repositoryList={repositoryList} />
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default OrganizationPage;
