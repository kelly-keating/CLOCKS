import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Clock from './Clock'


const App = props => {

  return (
    <div>
      <Router>
        <div>
          <Route path='/' component={Clock}/>
        </div>
      </Router>
    </div>
  )
}

export default App
