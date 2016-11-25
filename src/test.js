import React, { PropTypes } from 'react'

class Test extends React.Component {
  constructor(){
    super()
    this.state = {
      time:0
    }
  }
  handleClick(n){
    this.setState({
      time:this.state.time + n
    })
  }

  render () {
    let styles = {
      ul:{
        listStyle:'none',
        padding:'0 10px'
      },
      li:{
        display:'inline-block',
        padding:'10px 20px'

      }
    }
    return(
      <div >

            <button onClick={this.handleClick.bind(this,1)}>+1</button>
          <button onClick={this.handleClick.bind(this,-1)}>-1</button>
        <p>数量：{this.state.time}</p>
      </div>
    )

  }
}

export default Test;
