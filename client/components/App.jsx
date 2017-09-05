import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import ClockInterface from './ClockInterface'


const App = props => {

  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={ClockInterface}/>
        </div>
      </Router>
    </div>
  )
}

export default App
