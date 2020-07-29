import React from 'react';
import classnames from 'classnames';
import { ReactComponent as gitBranch } from './icons/git-branch.svg';
import { ReactComponent as law } from './icons/law.svg';
import { ReactComponent as link } from './icons/link.svg';
import { ReactComponent as location } from './icons/location.svg';
import { ReactComponent as star } from './icons/star.svg';

import s from './Icon.module.css';


const iconList = {
  gitBranch,
  law,
  link,
  location,
  star,
};

export type IconType = keyof typeof iconList;

type Props = {
  icon: IconType,
  className?: string,
}

const Icon: React.FC<Props> = (props) => {
  const { icon, className } = props;
  const IconComponent = iconList[icon];
  const iconClassNames = classnames(className, s.root);

  return (
    <div className={iconClassNames}>
      <IconComponent />
    </div>
  );
}

export default Icon;
