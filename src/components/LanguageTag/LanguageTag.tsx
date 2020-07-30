import Text from 'components/Text/Text';
import React from 'react';
import classnames from 'classnames';

import s from './LanguageTag.module.css';


type Props = {
  name?: string,
  color?: string | null,
  className?: string,
}

const LanguageTag: React.FC<Props> = (props) => {
  const { name, color, className } = props;
  const rootClassNames = classnames(className, s.root);

  if (!name) {
    return null;
  }

  return (
    <Text block size="small" className={rootClassNames}>
      { !!color && (
        <div className={s.icon}>
          <div className={s.circle} style={{ backgroundColor: color }} />
        </div>
      )}
      { name }
    </Text>
  );
}

export default LanguageTag;
