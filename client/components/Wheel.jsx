import React from 'react'
import Clock from './Clock'

class Wheel extends Clock{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.drawSecs(this.state.seconds)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      h: nextProps.time.h,
      m: nextProps.time.m,
      s: nextProps.time.s
    }) //necessary??
    this.drawSecs(nextProps.time.s)
  }

  drawSecs(seconds){
    var can = document.getElementById('canvas1');
    var ctx = can.getContext('2d');

    var cx = 100;
    var cy = 35;

    ctx.clearRect(0, 0, can.width, can.height)

    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,30,0,toRadians(seconds*6));
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();

    return null
  }

  render() {
    return(
      <div className='clock'>
        <canvas id="canvas1" width="200px" height="70px"></canvas>
      </div>
    )
  }
}

function toRadians(deg) {
  return deg * Math.PI / 180
}

export default Wheel
