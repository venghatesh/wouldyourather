import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Card,Label} from 'reactstrap'
class PollDetails extends React.Component {

  countVotes(oneOrTwo) {
    const { questions, id } = this.props;
    const option = oneOrTwo === 1 ? 'optionOne' : 'optionTwo';
    return questions[id][option].votes.length;
  }

  render() {
    const { answer } = this.props;
    const optionOneCount = this.countVotes(1);
    const optionTwoCount = this.countVotes(2);
    const totalVotes = optionOneCount + optionTwoCount;
    const optionOnePercent = parseInt(100 * (optionOneCount / totalVotes), 10);
    const optionTwoPercent = parseInt(100 - optionOnePercent, 10);

    return (

    <div>
        <Card>
          <Label> {answer !== '' ? `${answer}` : ''} </Label>
            Option 1 :
          <Label>    {`${optionOnePercent}%`}

            {optionOneCount === 1
              ? ` voted by ${optionOneCount} user`
              : ` voted by ${optionOneCount} users`}
         </Label>
          Option 2 :
         <Label>

               {`${optionTwoPercent}%`}

             {optionTwoCount === 1
              ? ` voted by ${optionTwoCount} user`
              : ` voted by ${optionTwoCount} users`}
           </Label>
        </Card>
    </div>
  );
  }
}


function mapStateToProps({ questions, authUser }, { id }) {
  let answer = '';

  if (questions[id].optionOne.votes.includes(authUser)) {
    answer = 'You voted for option one';
  } else if (questions[id].optionTwo.votes.includes(authUser)) {
    answer = 'You voted for option two';
  } else {
    answer = '';
  }

  return {
    answer,
    questions,
  };
}

PollDetails.propTypes = {
  // from connect
  questions: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
  // from Question
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PollDetails);
