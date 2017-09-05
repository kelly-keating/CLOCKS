import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Colour from './Colour'
import Sound from './Sound'
import Circle from './Circle'
import Wheel from './Wheel'


const App = props => {

  return (
    <div>
      <Router>
        <div>
          <Route path='/' component={Home}/>
          <Route path='/time' component={Header}/>
          <Route path='/time/lliw' component={Colour}/>
          <Route path='/time/sain' component={Sound}/>
          <Route path='/time/cylch' component={Circle}/>
          <Route path='/time/rhod' component={Wheel}/>
        </div>
      </Router>
    </div>
  )
}

export default App
