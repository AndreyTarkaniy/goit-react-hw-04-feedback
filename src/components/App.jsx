import React, { Component } from 'react';

import Container from 'components/container/container';
import Section from 'components/section/section';
import { Statistics } from 'components/statistics/statistics';
import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import Notification from './notification/notification';
// import css from 'components/addition/addition.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementClick = event => {
    const { name } = event.target;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  // goodIncrement = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // neutralIncrement = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // badIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const optionsKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsKeys}
            onLeaveFeedback={this.handleIncrementClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
