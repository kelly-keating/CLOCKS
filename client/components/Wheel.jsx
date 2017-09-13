import React from 'react'
import Clock from './Clock'

class Wheel extends Clock{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.drawCircles(this.state.seconds)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      h: nextProps.time.h,
      m: nextProps.time.m,
      s: nextProps.time.s
    }) //necessary??
    this.drawCircles(nextProps.time.s)
  }

  drawCircles(seconds){
    var can = document.getElementById('canvas1');
    var ctx = can.getContext('2d');

    var cy = 35;
    var startAng = -0.5 * Math.PI

    ctx.clearRect(0, 0, can.width, can.height)

    this.drawOneCircle(ctx, 50, cy, startAng, getEnd(seconds, startAng))
    this.drawOneCircle(ctx, 150, cy, startAng, getEnd(seconds, startAng))
    this.drawOneCircle(ctx, 250, cy, startAng, getEnd(seconds, startAng))
  }

  drawOneCircle(ctx, cx, cy, startAng, endAng){
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,30,startAng,endAng);
    ctx.lineTo(cx,cy);
    ctx.closePath();
    ctx.fill();
  }

  render() {
    return(
      <div className='clock'>
        <canvas id="canvas1" width="300px" height="70px"></canvas>
      </div>
    )
  }
}

function getEnd(amt, startAng) {
  return (2 * Math.PI * (amt+1) / 60) + startAng
}

export default Wheel
