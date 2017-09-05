import React from 'react'
import { Link } from 'react-router-dom'

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      h: 0,
      m: 0,
      s: 0
    }
  }

  componentDidMount(){
    setInterval(() => {this.recolour()}, 50)
  }

  recolour() {
    var date = new Date()
    this.setState({
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    })
    var s = Math.floor(date.getSeconds()*255/59)
    var m = Math.floor(date.getMinutes()*255/59)
    var h = Math.floor(date.getHours()*255/23)

    document.body.style.backgroundColor = `rgb(${s},${m},${h})`
  }

  linkToClock() {
    return (
      <div id='clock'><Link to='/clock'>TIME</Link></div>
    )
  }

  ownPage() {
    var date = new Date()
    var s = date.getSeconds()
    var m = date.getMinutes()
    var h = date.getHours()

    return(
      <div id='clock'>
        TIME
        <div id='time'>#{h}:{m}:{s}</div>
        <Link to='/'>BACK IN</Link>
      </div>
    )
  }

  render(){
    var page = this.props.location.pathname
    var content = (page === '/clock') ? this.ownPage() : this.linkToClock()
    return(
      content
    )
  }

}

export default Clock
