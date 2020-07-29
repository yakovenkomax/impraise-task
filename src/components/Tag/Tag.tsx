import Icon, { IconType } from 'components/Icon/Icon';
import React from 'react';
import classnames from 'classnames';

import s from './Tag.module.css';


type Props = {
  icon?: IconType,
  className?: string,
  children?: React.ReactNode,
}

const Tag: React.FC<Props> = (props) => {
  const { icon, className, children } = props;
  const tagClassNames = classnames(className, s.root);

  if (!children) {
    return null;
  }

  return (
    <div className={tagClassNames}>
      { !!icon && <Icon icon={icon} className={s.icon} /> }
      { children }
    </div>
  );
}

export default Tag;
