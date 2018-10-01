import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


// imports from material-ui
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import PageNotFound from './PageNotFound';

import Layout from './Layout';
import Question from './question/Question';
import SmallAvatar from './ui-library/SmallAvatar';

import { Title1, MetaText } from '../styles/typography';

const QuestionPage = ({
  match,
  realName,
  imageURL,
  errorPage,
}) => {
  const { id } = match.params;
  const { path } = match;
  if (errorPage) {
    return (
      <PageNotFound/>
    );
  }

  return (
    <Layout>
      <Title1>
        {path.includes('details') ?
        'Poll Details' :
        'Would You Rather'}
      </Title1>
      {path.includes('details') ?
        <Question
          id={id}
          status="PollDetails"
        /> :
        <Question
          id={id}
          status="PollIsVoting"
        />
      }

      <MetaText>
        {`Posted by ${realName}`}
      </MetaText>

      {imageURL === '' ?
        <div>
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div> :
        <div>
          <SmallAvatar
            imageURL={imageURL}
            userName={realName}
          />
        </div>
      }

      <Link to="/">
          {'Go 🔙 Home'}
      </Link>
    </Layout>
  );
};



QuestionPage.propTypes = {
  // from connect
  realName: PropTypes.string,
  imageURL: PropTypes.string,
  errorPage: PropTypes.bool.isRequired,
  // from Router
  match: PropTypes.object.isRequired,
};

QuestionPage.defaultProps = {
  realName: '',
  imageURL: '',
  errorPage:false
};

function mapStateToProps({ questions, users, authUser }, { match }) {
  if (questions[match.params.id] === undefined) {

    const errorPage = true;
    return {
      errorPage,
    };
  }
  const userName = questions[match.params.id].author;
  const realName = authUser === userName ? 'you' : users[userName].name;
  const imageURL = users[userName].avatarURL;
  const errorPage = false;
  return {
    realName,
    imageURL,
    errorPage,
  };
}

export default connect(mapStateToProps)(QuestionPage);
