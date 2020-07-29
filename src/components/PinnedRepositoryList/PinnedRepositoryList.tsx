import LanguageTag from 'components/LanguageTag/LanguageTag';
import Tag from 'components/Tag/Tag';
import Text from 'components/Text/Text';
import React from 'react';
import { PinnedRepositoryListType } from './PinnedRepositoryList.types';

import s from './PinnedRepositoryList.module.css';

type Props = {
  pinnedRepositoryList: PinnedRepositoryListType,
}

const PinnedRepositoryList: React.FC<Props> = (props) => {
  const { pinnedRepositoryList } = props;

  if (!pinnedRepositoryList?.length) {
    return null;
  }

  return (
    <div className={s.root}>
      <Text block size="h2">Pinned repositories</Text>
      <ul className={s.list}>
        { pinnedRepositoryList.map(repository => (
          <li key={repository?.id} className={s.item}>
            <div className={s.main}>
              <Text block>
                { repository?.name }
              </Text>
              <Text block>
                { repository?.description }
              </Text>
            </div>
            <div className={s.tags}>
              <LanguageTag name={repository?.primaryLanguage?.name} color={repository?.primaryLanguage?.color} />
              <Tag icon="star" text={repository?.stargazers.totalCount} />
              <Tag icon="gitBranch" text={repository?.forks.totalCount} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PinnedRepositoryList;
