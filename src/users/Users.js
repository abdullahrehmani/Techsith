import React, {Component} from 'react';
import User from './User'
class Users extends Component{

  state = {
    Users:[
      {name:"john" , age:70},
      {name:"Ahmd" , age:30},
      {name:"umar" , age:40},
      {name:"Ali"  , age:50},
     ],
     title:"Users list"
  };
  makeMeYounger=()=>{
    const newState =this.state.Users.map((user)=>{
       const tempUser= user;
      // tempUser.name=  "Ali";
       tempUser.age -=10;
       return tempUser;

    });
    this.setState({
      newState
    })
  }

  
   
  



    render(){
        return (<div>
          <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
          <br/>
          <h1>{this.state.title}</h1>
          {
            this.state.Users.map((user)=>{
              return<User age={user.age} >{user.name}</User>
            })
          }
        

          </div>)
        
    }

}
export default Users