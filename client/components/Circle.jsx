import React from 'react'
import Clock from './Clock'

class Circle extends Clock {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='clock'>
        Circle
      </div>
    )
  }
}

export default Circle
