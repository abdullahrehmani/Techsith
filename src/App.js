import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';

class App extends Component {
  
constructor(){
  super();
  UniqueId.enableUniqueIds(this);
  this.state={
    users:[
      {id:this.nextUniqueId(),name:'Ali' , age:20},
      {id: this.nextUniqueId(),name:'Ahmad' , age:30},
      {id: this.nextUniqueId(),name:'Umar' , age:40}
    ]
  }
  console.log(this.state)

}

deleteUser=(index,e)=>{
  const users=Object.assign([], this.state.users);
  users.splice(index , 1);
  this.setState({users:users})

}
ChangeUserName =(id ,e)=>{
  const index=this.state.users.findIndex((user)=>{
    return user.id==id
  });
  const user=Object.assign({}, this.state.users[index]);
    user.name=e.target.value;
    const users = Object.assign([], this.state.users);
    users[index]=user;
    this.setState({users:users});

}
  render() {
    return (
      <div className="App">
      <ul>
        {
          this.state.users.map((user,index)=>{
            return(<User
              age={user.age}
              key={user.id}
              delEvent={this.deleteUser.bind(this,index)}
              changeEvent={this.ChangeUserName.bind(this,user.id)}
                >{user.name}</User>)

          })
        }
      </ul>
         
      </div>
    );
  }
}

export default App;
