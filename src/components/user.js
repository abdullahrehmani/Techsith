    import React from 'react';
    const user =(props)=>{
    return(  <li>
<span>id:{props.id},|name:{props.children},age={props.age}</span>
 <input onChange={props.changeEvent} value={props.children}/>
 <button onClick={props.delEvent} >Delete</button>
        </li>)

    }

    export default user;