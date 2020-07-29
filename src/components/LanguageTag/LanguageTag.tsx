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
  const languageTagClassNames = classnames(className, s.root);

  return (
    <div className={languageTagClassNames}>
      { !!color && (
        <div className={s.icon} style={{ backgroundColor: color }} />
      )}
      { name }
    </div>
  );
}

export default LanguageTag;
