import LanguageTag from 'components/LanguageTag/LanguageTag';
import Text from 'components/Text/Text';
import React from 'react';
import { IRepositoryList } from './RepositoryList.types';

import s from './RepositoryList.module.css';
import Tag from 'components/Tag/Tag';

type Props = {
  repositoryList: IRepositoryList,
}

const RepositoryList: React.FC<Props> = (props) => {
  const { repositoryList } = props;

  if (!repositoryList?.length) {
    return null;
  }

  return (
    <div className={s.root}>
      <Text block size="h2">Repositories</Text>
      <ul className={s.list}>
        { repositoryList.map(repository => (
          <li key={repository?.id} className={s.item}>
            <div className={s.main}>
              <Text block>
                { repository?.name }
              </Text>
              <Text block>
                { repository?.parent?.nameWithOwner }
              </Text>
              <Text block>
                { repository?.description }
              </Text>
            </div>
            <div className={s.tags}>
              <Tag icon="law" text={repository?.licenseInfo?.spdxId} />
              <Tag icon="star" text={repository?.stargazers.totalCount} />
              <Tag icon="gitBranch" text={repository?.forks.totalCount} />
              <Text>
                { repository?.updatedAt }
              </Text>
              <LanguageTag name={repository?.primaryLanguage?.name} color={repository?.primaryLanguage?.color} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
