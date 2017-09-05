import React from 'react'
import Clock from './Clock'

class Colour extends Clock {

  constructor (props) {
    super(props)
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#900C3F";
  }

  recolour(hour, minute, second) {
    var hRGB = Math.floor(hour*255/23)
    var mRGB = Math.floor(minute*255/59)
    var sRGB = Math.floor(second*255/59)

    document.body.style.backgroundColor = `rgb(${sRGB},${mRGB},${hRGB})`
  }

  colourTime(h, m, s) {
    this.recolour(h, m, s)
    return(
      <div className='clock'>#{h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}</div>
    )
  }

  render(){
    return(
      this.colourTime(this.state.h, this.state.m, this.state.s)
    )
  }

}

export default Colour
