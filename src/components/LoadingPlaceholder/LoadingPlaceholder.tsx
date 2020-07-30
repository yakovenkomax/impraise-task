import React from 'react';
import GradientPlaceholder from 'components/GradientPlaceholder/GradientPlaceholder';
import classnames from 'classnames';

import s from './LoadingPlaceholder.module.css';

type Props = {
  className?: string,
}

const LoadingPlaceholder: React.FC<Props> = (props) => {
  const { className } = props;
  const rootClassNames = classnames(className, s.root);

  return (
    <div className={rootClassNames}>
      <div className={s.header}>
        <GradientPlaceholder className={s.avatar} />
        <div>
          <GradientPlaceholder className={s.title} />
          <GradientPlaceholder className={s.location} />
          <GradientPlaceholder className={s.websiteUrl} />
        </div>
      </div>
      <div className={s.repositories}>
        <GradientPlaceholder className={s.repositoryListTitle} />
        <ul className={s.repositoryList}>
          { [...Array(5)].map((item, index) => (
            <li key={index} className={s.repositoryListItem}>
              <GradientPlaceholder className={s.repositoryTitle} />
              <GradientPlaceholder className={s.repositoryDescription} />
              <ul className={s.tags}>
                <li className={s.tagWrapper}>
                  <GradientPlaceholder className={s.tag} />
                </li>
                <li className={s.tagWrapper}>
                  <GradientPlaceholder className={s.tag} />
                </li>
                <li className={s.tagWrapper}>
                  <GradientPlaceholder className={s.tag} />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoadingPlaceholder;
