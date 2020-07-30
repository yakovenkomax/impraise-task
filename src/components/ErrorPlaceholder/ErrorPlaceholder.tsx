import Link from 'components/Link/Link';
import React from 'react';
import Text from 'components/Text/Text';
import classnames from 'classnames';

import s from './ErrorPlaceholder.module.css';

type Props = {
  className?: string,
}

const ErrorPlaceholder: React.FC<Props> = (props) => {
  const { className } = props;
  const rootClassNames = classnames(className, s.root);

  return (
    <div className={rootClassNames}>
      <Text size="h1" className={s.title}>An error has occurred</Text>
      <Text>
        Check the console for details.
      </Text>
      <Text size="small" className={s.link}>
        <Link block path="/">Go to Homepage</Link>
      </Text>
    </div>
  );
}

export default ErrorPlaceholder;
