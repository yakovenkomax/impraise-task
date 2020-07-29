import React from 'react';
import classnames from 'classnames';
import s from './Text.module.css';


type Props = {
  size?: 'body' | 'h1' | 'h2' | 'h3' | 'small',
  block?: boolean,
  className?: string,
  children?: React.ReactNode,
}

const Text: React.FC<Props> = (props) => {
  const { size = 'body', block, className, children } = props;
  const textClassNames = classnames(s.root, className, {
    [s.block]: Boolean(block),
    [s[`size-${size}`]]: Boolean(size),
  });

  if (!children) {
    return null;
  }

  return (
    <div className={textClassNames}>
      { children }
    </div>
  );
}

export default Text;
