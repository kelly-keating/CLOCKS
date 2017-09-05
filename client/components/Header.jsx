import React from 'react'

import Colour from './Colour'
import Sound from './Sound'
import Circle from './Circle'
import Wheel from './Wheel'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  getPage (num) {
    switch (num) {
      case 1:
        return <Colour/>;
      case 2:
        return <Sound/>;
      case 3:
        return <Circle/>;
      case 4:
        return <Wheel/>;
      default:
        return;
    }
  }

  render () {
    return (
      <div id='clock'>TIME</div>
    )
  }
}

export default Header
