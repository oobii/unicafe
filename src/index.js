import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good,neutral,bad}) => {
// const good = props.good
// const neutral = props.neutral
// const bad = props.bad
if ((good+neutral+bad) === 0) {
  return (<div><h3>No feedback given</h3></div>)
}
else {

  return (

    <div>
<h3>Statistics</h3>
        good {good}
        <br></br>
        neutral {neutral}
        <br></br>
        bad {bad}
        <br></br>
        all {good + neutral + bad}
        <br></br>
        avarage {(good + neutral + bad)/3}
        <br></br>
        percentage {good===0 ? 0 : 100*good/(good + neutral + bad)} 
       
      </div>

  )
}
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    
      <div>
      <h3>Give Feedback</h3>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
