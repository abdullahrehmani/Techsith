  import React, { Component } from 'react';

  import './App.css';

  class App extends Component {
    state={
      name:'tecsith' 
    }
    changeName=(newName )=>{
      this.setState({
      name:newName
      })
    }
    render() {
      return (
        <div className="App">
        <br/><br/> 
        
        <button onClick={()=>this.changeName('Ali')}>Chang state</button>
        <br/><br/> 
        <button onClick={this.changeName.bind(this , 'good')}>Chang state</button>  
        <div>{this.state.name }</div>
        <div>{this.state.name }</div>
      
        </div>
      );
    }
  } 

  export default App;
