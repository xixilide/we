import React, { PropTypes } from 'react'
import Bu from './img/２.svg';
import Bo from './img/1.svg';


class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      show:true
    }
  }
handleClick(){
  this.setState((prevState,props) => ({show:!prevState.show}))
  // {
  //   console.log(prevState,props);
  //   return{
  //     show:!this.state.show
  //   }
  //
  // })
}
  render () {
    let styles = {
      div:{
        width:'100vw',
        height:'100vh'

      },
      h2:{
        textAlign:'center',
        color:'#fff'

      },
      left:{
        position:'absolute',
        top:'0px',
        width:'30%',
        height:'100%',
        minWidth:'200px',
        backgroundColor:'#0097A7',
        left:this.state.show ? '0':'-410px',
        transition:'all 0.5s ease-in'
      },
      ul:{
        listStyle:'none',
        marginTop:'100px'
      },
      li:{
        padding:'10px 0px',
        width:'18vw',
        textAlign:'center',
        marginTop:'5vh',
        fontSize:'20px',
        color:'#fff',
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:'5px'
      },
      img:{
        position:'absolute',
        top:'10px',
        left:'10px',
        display:'block',
        width:'4vw',
        height:'4vw'
      }

    }
  return(
    <div style={styles.div}>
  <img src={Bo} style={styles.img}　onClick={this.handleClick.bind(this)}/>
      <div　style={styles.left}>
        <img src={Bu} style={styles.img}　onClick={this.handleClick.bind(this)}/>
        <h2 style={styles.h2}>Title</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>主页</li>
          <li style={styles.li}>登录</li>
          <li style={styles.li}>注册</li>
        </ul>
      </div>
    </div>
  )
  }
}

export default Main;
