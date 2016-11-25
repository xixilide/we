import React, { PropTypes } from 'react'

class Card extends React.Component {
  constructor(){
    super()
    this.state = {
        tab:0
    }
  }
  handleClick(n){
    this.setState({
      tab:n
    })
  }
  render () {
    const box1 = (
      <div>
        <p>选项卡一</p>
        <p>选项卡一</p>
        <p>选项卡一</p>
        <p>选项卡一</p>
      </div>
    )
    const box2 = (
      <div>
        <p>选项卡二</p>
        <p>选项卡二</p>
        <p>选项卡二</p>
        <p>选项卡二</p>
      </div>
    )
    const box3 = (
      <div>
        <p>选项卡三</p>
        <p>选项卡三</p>
        <p>选项卡三</p>
        <p>选项卡三</p>
      </div>
    )
    return(
      <div >
          <button onClick={this.handleClick.bind(this,0)}>选项卡一</button>
          <button onClick={this.handleClick.bind(this,1)}>选项卡二</button>
          <button onClick={this.handleClick.bind(this,2)}>选项卡三</button>
      <div>
        {this.state.tab ==0 ? box1:
        this.state.tab ==1 ? box2　: box3}
    </div>
      </div>
    )
  }
}

export default Card;
