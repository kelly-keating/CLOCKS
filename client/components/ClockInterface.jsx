import React from 'react'

import Colour from './Colour'
import Sound from './Sound'
import Circle from './Circle'
import Wheel from './Wheel'
import Clock from './Clock'


class ClockInterface extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      time: {
        h: 0,
        m: 0,
        s: 0
      }
    }
    this.changePageUp = this.changePageUp.bind(this);
    this.changePageDown = this.changePageDown.bind(this);
  }

  componentDidMount(){
    this.myInterval = setInterval(() => {this.tick()}, 50)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  tick () {
    var date = new Date()
    this.setState({
      time: {
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
      }
    })
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
        return <Colour time={this.state.time}/>;
      case 2:
        return <Sound time={this.state.time}/>;
      case 3:
        return <Circle time={this.state.time}/>;
      case 4:
        return <Wheel time={this.state.time}/>;
      default:
        return <Clock time={this.state.time}/>;
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

export default ClockInterface
