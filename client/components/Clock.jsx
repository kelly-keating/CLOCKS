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

  changePageUp () {
    var page = this.state.page
    this.setState({page: page > 3 ? 0 : page + 1 })
    console.log(this.state)
  }

  changePage(diff) {
    var next = this.state.page + diff
    if (diff > 4) { next = 0 }
    else if (diff < 0) { next = 4 }
    this.setState({page: next})
  }

  render () {
    return (
      <div>
        <div id='backIn'>BACK IN {this.state.page}</div>
        <div id='time' onClick={this.changePageUp}>TIME</div>
      </div>
    )
  }
}

export default Clock
