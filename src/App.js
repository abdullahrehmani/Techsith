import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux'
class App extends Component {



  render() {
    return (
      <div className="App">

  <div>Age:<span>{this.props.age}</span></div>
  <button onClick={this.props.onAgeUP}>Age Up </button>
  <button onClick={this.props.onAgeDown}>Age down</button>
  <hr/>
  <div>History</div>
  <div>
    <ul>
{
this.props.history.map(el=>(
  <li className=" historyItem" key={el.id}onClick={()=>this.props.onDelItem(el.id)} >
    {el.age}
  </li>

))
}      
    </ul>

  </div>
       
      </div>
    );
      }
    }
    const mapStateToProps=(state)=>{
      return{
        age:state.age,
        history:state.history
      }
    }

    const mapDispachToProps = (dispach)=>{
      return{
        onAgeUP:()=> dispach({type:'AGE_UP',value:1}),
        onAgeDown:()=>dispach({type:'AGE_DOWN',value:1}),
        onDelItem:(id)=>dispach({type:"DEL_ITEM",key: id})
      };
    };
  


export default connect(mapStateToProps,mapDispachToProps)(App);
