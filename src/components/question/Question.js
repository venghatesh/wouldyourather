
import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import FeedLink from './FeedLink';
import PollDetails from './PollDetails';
import PollIsVoting from './PollIsVoting';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.status };
  }

  static propTypes = {
    // from connect
    questions: PropTypes.object.isRequired,
    // from Feed
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'UserWillVote',
      'UserDidVote',
      'PollIsVoting',
      'PollDetails',
    ]).isRequired,
  };

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.status === prevState.status) {
      return null;
    }
    return {
      status: 'PollDetails',
    };
  }

  renderActions() {
    const { status } = this.state;
    const { id } = this.props;

    switch (status) {

      case 'PollIsVoting':
        return (
          <PollIsVoting
            id={id}
          />
        );
      case 'PollDetails':
        return (
          <PollDetails
            id={id}
          />
        );
      case 'UserDidVote':
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
      default:
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
    }
  }

  render() {
    const { questions, id } = this.props;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
    <div className ="card" align="center">
    <p className="card-text"> Option 1 : { optionOne}</p>

    <p>
            <img
              alt="or"
              src="/or.webp"
              style={{ width: '2em' }}
            />
    </p>

    <p className="card-text"> Option 2 : { optionTwo} </p>


        {this.renderActions()}

      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Question);
