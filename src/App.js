import React, { Component } from 'react';
import './App.css';
const Temp=(props)=>{
  console.log('render temp')
  return(<div>{props.val}</div>)

}



class App extends Component {

componentDidMount() {
  setInterval(() => {
    this.setState(()=>{
      return{val:1}
    });  
  },2000);
}


// shouldComponentUpdate(nextProp, nextState){
//   console.log('nextstate',nextState)
//   console.log('current state',this.state)

//   return(this.state.val===nextState.val ?false:true)
// }

  state={
    val:1
  }
  render() {
    console.log('render app')
    return (
      <div className="App">
      <Temp val={this.state.val} />
    
      </div>
    );
  }
}

export default App;
   