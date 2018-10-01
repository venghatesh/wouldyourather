import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default function FeedLink(props) {
  const { id, status } = props;

  return (
  <div>

  {status === 'UserWillVote'
    ? (
      <Link
        to={`/questions/${id}`}
      >
      {`Vote`}
      </Link>
    )
    : (
      <Link
        to={`/questions/${id}/details`}
      >
      {`Poll Details`}
      </Link>
    )
  }
 </div>
  );
}


FeedLink.propTypes = {
  // from Question
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'UserWillVote',
    'UserDidVote',
  ]).isRequired,
};
