import React from 'react';
import Tag from 'components/Tag/Tag';
import Text from 'components/Text/Text';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import LanguageTag from 'components/LanguageTag/LanguageTag';
import FriendlyDate from 'components/FriendlyDate/FriendlyDate';
import { RepositoryListType } from 'components/RepositoryList/RepositoryList.types';

import s from './RepositoryList.module.css';


type Props = {
  repositoryList?: RepositoryListType,
  isLoadingMore?: boolean,
  showLoadMore?: boolean,
  onLoadMore?: () => void,
}

const RepositoryList: React.FC<Props> = (props) => {
  const { repositoryList, showLoadMore, onLoadMore, isLoadingMore } = props;

  if (!repositoryList?.length) {
    return null;
  }

  return (
    <div className={s.root}>
      <Text block size="h2" className={s.title}>Repositories</Text>
      <ul className={s.list}>
        { repositoryList.map(repository => (
          <li key={repository?.id} className={s.item}>
            <Link fake cover>
              <Text block size="h3">
                { repository?.name }
              </Text>
            </Link>
            { repository?.parent?.nameWithOwner && (
              <Text block size="small">
                <Link fake className={s.parent}>
                  { repository?.parent?.nameWithOwner }
                </Link>
              </Text>
            )}
            <Text block className={s.description}>
              { repository?.description }
            </Text>
            <div className={s.tags}>
              <LanguageTag
                name={repository?.primaryLanguage?.name}
                color={repository?.primaryLanguage?.color}
                className={s.tag}
              />
              <Tag
                icon="star"
                className={s.tag}
                linkProps={{ fake: true, className: s.tagLink }}
              >
                { repository?.stargazers.totalCount }
              </Tag>
              <Tag
                icon="gitBranch"
                className={s.tag}
                linkProps={{ fake: true, className: s.tagLink }}
              >
                { repository?.forks.totalCount }
              </Tag>
              <Tag
                icon="law"
                className={s.tag}
              >
                { repository?.licenseInfo?.spdxId }
              </Tag>
              <Text size="small" className={s.tag}>
                Updated
                <FriendlyDate date={repository?.updatedAt} />
              </Text>
            </div>
          </li>
        ))}
      </ul>
      { showLoadMore && (
        <div className={s.pagination}>
          <Button text={isLoadingMore ? 'Loading...' : 'Load more'} onClick={onLoadMore} className={s.loadMore}/>
        </div>
      )}
    </div>
  );
}

export default RepositoryList;
