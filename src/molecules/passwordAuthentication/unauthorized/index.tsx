import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useStyle } from 'molecules/passwordAuthentication/unauthorized/styled';

export const Unauthorized: FC = () => {
  const { unauthorized, unauthorizedText } = useStyle();
  return (
    <div className={unauthorized}>
      <p className={unauthorizedText}>It looks like you shouldn't be here</p>
      <p className={unauthorizedText}>
        <Link to="/sign-in">sign in again</Link> or just{' '}
        <Link to="/sign-up">register</Link>
      </p>
    </div>
  );
};
