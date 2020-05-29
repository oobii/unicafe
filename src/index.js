import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statictic = ({text,value}) => {
  return (<div>{text} {value}</div>)

}

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
        <Statictic text="good" value={good} />
        <Statictic text="neutral" value={neutral} />
        <Statictic text="bad" value={bad} />
        <Statictic text="all" value={good + neutral + bad} />
        <Statictic text="average" value={(good + neutral + bad)/3} />
        <Statictic text="percentage" value={good===0 ? 0 : 100*good/(good + neutral + bad)} />
      </div>

  )
}
}
const Button = ({lable,handle}) => {
return (
  
    <button onClick={handle}>{lable}</button>
  
)
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
        {/* <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button> */}
        <Button lable="good" handle={handleGoodClick} />
        <Button lable="neutral" handle={handleNeutralClick} />
        <Button lable="bad" handle={handleBadClick} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
