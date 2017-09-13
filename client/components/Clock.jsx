import React from 'react'

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      h: 0,
      m: 0,
      s: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      h: nextProps.time.h,
      m: nextProps.time.m,
      s: nextProps.time.s
    })
  }

  render(){
    var h = this.state.h;
    var m = this.state.m;
    var s = this.state.s;
    return(
      <div className='clock'>{h%12}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s} {h > 12 ? 'PM' : 'AM'}</div>
    )
  }

}

export default Clock
