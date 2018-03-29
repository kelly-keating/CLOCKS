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

  componentWillReceiveProps({time}) {
    const {h, m, s} = time
    this.setState({h,m,s})
  }

  render(){
    const {h, m ,s} = this.state
    return(
      <div className='clock'>{h%12 ? h%12 : 12}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s} {h > 11 ? 'PM' : 'AM'}</div>
    )
  }

}

export default Clock
