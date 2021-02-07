import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad }) => {
  const feedbackSum = good + neutral + bad
  const feedbackAvg = (good - bad) / feedbackSum
  const feedbackPos = (good / feedbackSum) * 100

  return (
    <div>
      <div>good {good} </div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {feedbackSum}</div>
      <div>average {feedbackAvg}</div>
      <div>positive {feedbackPos}%</div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>
        good
      </button>
      <button onClick={increaseNeutral}>
        neutral
      </button>
      <button onClick={increaseBad}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));