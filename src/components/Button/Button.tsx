import React from 'react';
import classnames from 'classnames';

import s from './Button.module.css';


type Props = {
  text?: string,
  type?: 'submit' | 'button' | 'reset',
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  className?: string,
}

const Button: React.FC<Props> = (props) => {
  const { text, type = 'button', onClick, className } = props;
  const rootClassNames = classnames(className, s.root);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  }

  if (!text) {
    return null;
  }

  return (
    <button type={type} onClick={handleClick} className={rootClassNames}>{ text }</button>
  );
}

export default Button;
