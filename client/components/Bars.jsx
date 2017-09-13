import React from 'react'
import Clock from './Clock'

class Bars extends Clock {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='clock'>
        Bars
      </div>
    )
  }
}

export default Bars
