import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import isThisYear from 'date-fns/isThisYear'
import formatDistance from 'date-fns/formatDistance'
import differenceInDays from 'date-fns/differenceInDays';
import classnames from 'classnames';

import s from './FriendlyDate.module.css';


type Props = {
  date?: string,
  className?: string,
}

const FriendlyDate: React.FC<Props> = (props) => {
  const { date, className } = props;
  const rootClassNames = classnames(s.root, className);

  if (!date) {
    return null;
  }

  const today = new Date();
  const parsedDate = parseISO(date);
  const daysDiff = differenceInDays(today, parsedDate);
  const thisYear = isThisYear(parsedDate);
  let text;

  switch (true) {
    case daysDiff < 30:
      text = ` ${formatDistance(today, parsedDate)} ago`;
      break;
    case !thisYear:
      text = ` on ${format(parsedDate, 'd MMM yyyy')}`;
      break;
    default:
      text = ` on ${format(parsedDate, 'd MMM')}`;
      break;
  }

  return (
    <span className={rootClassNames}>
      { text }
    </span>
  );
}

export default FriendlyDate;
