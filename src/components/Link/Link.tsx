import React from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

import s from './Link.module.css';


type Props = {
  path?: string,
  href?: string,
  fake?: boolean,
  cover?: boolean,
  className?: string,
  children?: React.ReactNode,
}

const Link: React.FC<Props> = (props) => {
  const { path, href, fake, cover, className, children } = props;
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (fake || !path) {
      return;
    }

    history.push(path);
  }

  const linkClassNames = classnames(className, s.root, { [s.cover]: Boolean(cover) });

  if (href) {
    return (
      <a className={linkClassNames} href={href}>
        { children }
      </a>
    );
  }

  return (
    <div className={linkClassNames} onClick={handleClick}>
      { children }
    </div>
  );
}

export default Link;
