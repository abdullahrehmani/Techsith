import React, {Component} from 'react';
import User from './User'
class Users extends Component{
    render(){
        return <div>
            <h1> {this.props.title}</h1>
          <User ></User>
          <User  age="20">Ahmad</User>
          <User  age="20">Umer</User>
          <User  age="20">Hamza</User>
            
            </div>
        
    }

}
export default Users