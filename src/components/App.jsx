import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log(`No option called ${option}`);
        break;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}`;
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleClickButton={handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleClickButton = e => {
//     const option = e.target.name;

//     if (option) {
//       this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//     }
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedback = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const goodFeedback = this.state.good;
//     let result = 0;
//     if (totalFeedback > 0) {
//       result = Math.ceil((goodFeedback / totalFeedback) * 100);
//     }

//     return `${result}`;
//   };
//   render() {
//     const countTotalFeedback = this.countTotalFeedback();
//     const countPositiveFeedbackPercentage = this.countPositiveFeedback();
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={css.container}>
//         <div className={css.wrapper}>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               handleClickButton={this.handleClickButton}
//             />
//           </Section>
//           <Section title="Statistics">
//             {countTotalFeedback > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback}
//                 positivePercentage={countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
