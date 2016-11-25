import React,{Component, PropTypes} from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap'; // 导航组件
import bag from './img/1.jpg'
import avater from './img/c2.jpg'

export default class App extends Component {
  constructor(){
    super();
    //控制组件内部的状态，知道如何定义
    this.state = {
      show:false,
      play:'thisShow',
      time:0
    }
  }
  handleClick(){
    this.setState({
      show:!this.state.show,
      time:this.state.time +1

    })
  }
  render(){
    let styles = {
      bg:{
        width:'100%',
        height:'30px',

      },
      ul:{
        listStyle:'none',
        padding:'0 10px',
        backgroundImage:`url(${bag})`
      },
      li:{
        display:this.state.show ? 'block':'inline-block',
        padding:'10px 20px',

      },
      im:{
        width:'200px',
        height:'200px',
        overFlow:'hidden'
      }
    }
    return(
      <div className="content-warp">

            <h1 onClick={this.handleClick.bind(this)}>get Bootstrop</h1>
           <ul style={styles.ul} className="menu">
             <li style={styles.li}>Bootstrop</li>
             <li style={styles.li}>get start</li>
             <li style={styles.li}>{this.state.time}</li>
             <li style={styles.li}>Componets</li>
             <li style={styles.li}>{this.state.play}</li>
           </ul>

        <div ><img src={avater} /></div>
        <div>App footer</div>
      </div>
    )
  }
}
