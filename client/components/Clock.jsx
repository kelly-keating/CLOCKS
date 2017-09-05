import React from 'react'

import Colour from './Colour'
import Sound from './Sound'
import Circle from './Circle'
import Wheel from './Wheel'

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      page: 0
    }
    this.changePageUp = this.changePageUp.bind(this);
    this.changePageDown = this.changePageDown.bind(this);
  }

  changePageUp () {
    var page = this.state.page
    this.setState({page: page < 4 ? page + 1 : 0 })
  }

  changePageDown () {
    var page = this.state.page
    this.setState({page: page > 0 ? page - 1 : 4 })
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
        return 'Clock';
    }
  }

  render () {
    return (
      <div>
        <div id='backIn' onClick={this.changePageDown}>BACK IN</div>
        {this.getPage(this.state.page)}
        <div id='time' onClick={this.changePageUp}>TIME</div>
      </div>
    )
  }
}

export default Clock
