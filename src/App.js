import React, { Component } from 'react';
import Child from './Child'
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state={
      name:'john'
    };
    console.log('constructor');
  }
  componentWillMount(){
    if(window.innerWidth<500){
    this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentwillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')

  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
changeState(){
  this.setState({name:'jill'})
}

  render() {
    console.log('render');
    return (

      <div className="App">
     name: {this.state.name}
    <br></br>
       innerWidths:{this.state.innerWidth}
     <Child name={this.state.name}/>
     <button onClick={this.changeState.bind(this)}>change</button>
      </div>
    );
  }
}

export default App;
