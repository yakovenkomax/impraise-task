import Icon, { IconType } from 'components/Icon/Icon';
import React from 'react';
import classnames from 'classnames';

import s from './Tag.module.css';


type Props = {
  text?: number | string | null,
  icon?: IconType,
  className?: string,
}

const Tag: React.FC<Props> = (props) => {
  const { text, icon, className } = props;
  const tagClassNames = classnames(className, s.root);

  if (!text) {
    return null;
  }

  return (
    <div className={tagClassNames}>
      { !!icon && <Icon icon={icon} /> }
      { text }
    </div>
  );
}

export default Tag;
