import React from 'react';
import classnames from 'classnames';

import s from './GradientPlaceholder.module.css';


type Props = {
  className?: string,
}

const GradientPlaceholder: React.FC<Props> = (props) => {
  const { className } = props;
  const rootClassNames = classnames(className, s.root);

  return (
    <div className={rootClassNames} />
  );
}

export default GradientPlaceholder;
