import React from 'react';
import Link from 'components/Link/Link';
import Text from 'components/Text/Text';
import classnames from 'classnames';

import s from 'components/HomePage/HomePage.module.css';


type Props = {
  className?: string,
}

const HomePage: React.FC<Props> = (props) => {
  const { className } = props;
  const rootClassNames = classnames(className, s.root);

  return (
    <div className={rootClassNames}>
      <Text size="h1" className={s.title}>GitHub Organizations Explorer</Text>
      <Text>
        Enter the organization login after "/" in the address bar, ex.
        {' '}
        <Link path="/github">"github"</Link>
        {' or '}
        <Link path="/impraise">"impraise"</Link>
        .
      </Text>
    </div>
  );
}

export default HomePage;
