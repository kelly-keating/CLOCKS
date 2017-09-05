import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Clock from './Clock'


const App = props => {

  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={Clock}/>
        </div>
      </Router>
    </div>
  )
}

export default App
