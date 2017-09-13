import React from 'react'
import Clock from './Clock'

class Bars extends Clock {
  constructor(props) {
    super(props)
  }

  barLength(time, unit) {
    return (time/unit)*100 + '%'
  }

  render() {
    return(
      <div className='clock'>
        <div className='timeBar' style={{width : this.barLength(this.state.h%12, 11)}}/>
        <div className='timeBar' style={{width : this.barLength(this.state.m, 59)}}/>
        <div className='timeBar' style={{width : this.barLength(this.state.s, 59)}}/>
      </div>
    )
  }
}

export default Bars
