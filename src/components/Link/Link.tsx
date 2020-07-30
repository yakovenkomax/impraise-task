import React from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

import s from './Link.module.css';


type Props = {
  path?: string,
  href?: string,
  fake?: boolean,
  cover?: boolean,
  block?: boolean,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  children?: React.ReactNode,
}

export type LinkProps = Props;

const Link: React.FC<Props> = (props) => {
  const { path, href, fake, cover, block, className, onClick, children } = props;
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (fake) {
      return;
    }

    if (onClick) {
      onClick(e);
      return;
    }

    if (!path) {
      return;
    }

    history.push(path);
  }

  const rootClassNames = classnames(className, s.root, {
    [s.cover]: Boolean(cover),
    [s.block]: Boolean(block),
  });

  if (href) {
    return (
      <a className={rootClassNames} href={href}>
        { children }
      </a>
    );
  }

  return (
    <div className={rootClassNames} onClick={handleClick}>
      { children }
    </div>
  );
}

export default Link;
