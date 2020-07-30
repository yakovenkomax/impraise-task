import { NetworkStatus } from '@apollo/client';
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
  const { loading, data, error, fetchMore, networkStatus } = useGetOrganizationQuery({
    skip: !login,
    variables: { login },
    notifyOnNetworkStatusChange: true,
  });

  const isLoadingMore = networkStatus === NetworkStatus.fetchMore;

  if (!login || typeof login !== 'string') return null; // will redirect to HomePage by router
  if (loading && !isLoadingMore) return <LoadingPlaceholder />;
  if (error || !data?.organization) return <ErrorPlaceholder />;

  const { organization } = data;
  const { name, location, avatarUrl, websiteUrl, repositories, pinnedItems } = organization;
  const { pageInfo } = repositories;
  const { hasNextPage } = pageInfo;

  if (name) {
    document.title = name;
  }

  const handleLoadMore = () => {
    const cursor = data?.organization?.repositories.pageInfo.endCursor;

    fetchMore({
      variables: { login, cursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        if (fetchMoreResult?.organization?.repositories.nodes) {
          fetchMoreResult.organization.repositories.nodes = [
            ...previousResult?.organization?.repositories.nodes || [],
            ...fetchMoreResult.organization.repositories.nodes,
          ];
        }

        return fetchMoreResult;
      },
    });
  }

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
      <PinnedRepositoryList pinnedItemsList={pinnedItems.nodes} />
      <RepositoryList
        repositoryList={repositories.nodes}
        showLoadMore={hasNextPage}
        isLoadingMore={isLoadingMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}

export default OrganizationPage;
