import React from 'react';
import { useState } from 'react';

import Container from 'components/container/container';
import Section from 'components/section/section';
import { Statistics } from 'components/statistics/statistics';
import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import Notification from './notification/notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementClick = target => {
    if (target === 'good') {
      setGood(prev => prev + 1);
    }
    if (target === 'neutral') {
      setNeutral(prev => prev + 1);
    }
    if (target === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const total = countTotalFeedback();
  const countPositiveFeedback = countPositiveFeedbackPercentage();
  const optionsKeys = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={handleIncrementClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};

export default App;
