import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Link , NavLink , Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User=(params)=>{
  return(<h1>welcome {params.username}</h1>)
}


class App extends Component {
state ={
  loggedIn:false
}
loginHnadle =()=>{
  this.setState(preState=>({
    loggedIn: !preState.loggedIn
  }))
}


  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li><NavLink  to="/" exact  activeStyle={ {color:'green'}}  >home</NavLink></li>
        <li><NavLink  to="/about" exact activeStyle={ {color:'green'}} >about</NavLink></li>
        <li><NavLink  to="/user/john" exact activeStyle={ {color:'green'}} >User john</NavLink></li>
        <li><NavLink  to="/user/peter" exact  activeStyle={ {color:'green'}} >User peter</NavLink></li>
        
      </ul>
      <Prompt  when={!this.state.loggedIn}
       message={(location)=>{
         return location.pathname.startsWith('/user') ? 'are you sure' :true

       }} />


<input type="button" value={this.state.loggedIn ? 'log out':'login'} onClick={this.loginHnadle.bind(this)} />


      <Link  to="/" ></Link>
      


      <Route path="/"  exact  strict
      render={
        ()=>{
          return(<h1>welcome home</h1>)
        }
      }  />

<Route path="/about"  exact strict render={
        ()=>{
          return(<h1>welcome about</h1>)
        }
      }  />

<Route  path="/user/:username" exact strict  render={({match})=>(
  this.state.loggedIn ? (<User  username={match.params.username}/>):(<Redirect to='/' />)
)}/>




      </div>
      </Router>
    );
  }
}

export default App;
