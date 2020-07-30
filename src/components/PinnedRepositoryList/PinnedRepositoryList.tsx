import LanguageTag from 'components/LanguageTag/LanguageTag';
import Link from 'components/Link/Link';
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
      <Text block size="h2" className={s.title}>Pinned repositories</Text>
      <ul className={s.list}>
        { pinnedRepositoryList.map(repository => (
          <li key={repository?.id} className={s.item}>
            <div className={s.main}>
              <Link fake cover>
                <Text block size="h3">
                  { repository?.name }
                </Text>
              </Link>
              <Text block className={s.description}>
                { repository?.description }
              </Text>
            </div>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PinnedRepositoryList;
