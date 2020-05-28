import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [bad, setBad] = useState([])

  const handleGoodClick = () => {
    //setAll(allClicks.concat('L'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    //setAll(allClicks.concat('R'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
   // setAll(allClicks.concat('R'))
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
      <h3>Give Feedback</h3>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h3>Statistics</h3>
        {good}
        <br></br>
        {neutral}
        <br></br>
        {bad}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
