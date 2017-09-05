import React from 'react'
import Clock from './Clock'

class Sound extends Clock {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='clock'>Sound</div>
    )
  }
}

export default Sound
