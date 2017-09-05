import React from 'react'
import Clock from './Clock'

class Sound extends Clock {

  constructor(props) {
    super(props)
  }

  updateVol(s) {
    console.log((s+1)/60);
  }

  render() {
    return(
      <div className='clock'>
        Sound
        {this.updateVol(this.state.s)}
        <audio id='secondSound' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Beep_example.ogg" type="audio/wav" autoPlay='true' loop='true' volume='0.5'/>
      </div>
    )
  }
}

export default Sound
