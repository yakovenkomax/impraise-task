import React from 'react';
import classnames from 'classnames';
import Text from 'components/Text/Text';
import Icon, { IconType } from 'components/Icon/Icon';
import Link, { LinkProps } from 'components/Link/Link';

import s from './Tag.module.css';

type Props = {
  icon?: IconType;
  className?: string;
  children?: React.ReactNode;
  linkProps?: LinkProps;
};

const Tag: React.FC<Props> = (props) => {
  const { icon, className, linkProps, children } = props;
  const rootClassNames = classnames(className, s.root);

  if (!children) {
    return null;
  }

  const renderContent = () => (
    <div className={s.content}>
      {!!icon && <Icon icon={icon} className={s.icon} />}
      {children}
    </div>
  );

  return (
    <Text block size="small" className={rootClassNames}>
      {linkProps ? (
        <Link block {...linkProps}>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </Text>
  );
};

export default Tag;
