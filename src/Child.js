import React, { Component } from 'react';
import './App.css';


class Child extends Component {

  constructor(){
    super();
   
    console.log('Child constuctor constructor');
  }
  componentWillMount(){
   
    console.log(' child componentwillMount')
  }
  componentDidMount(){
    console.log(' child componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('Child  componentWillReceiveProps')
  }
  render() {
    console.log('child render');
    return (

      <div className="App">
     child name:{this.props.name}
     
      </div>
    );
  }
}

export default Child;
