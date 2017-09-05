import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'


const App = props => {

  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={Header}/>
        </div>
      </Router>
    </div>
  )
}

export default App
