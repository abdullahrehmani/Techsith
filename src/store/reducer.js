
const intialState ={
    a:1,
    b:1
};

const reducer =(state= intialState,action)=>{
    if(action.type==='UPDATE_A'){
        return{
            ...state,
            a:state.a+state.b+1
        }

    }
    if(action.type==='UPDATE_B'){
        return{
            ...state,
            b:state.a+state.b+1
        }

    }


    return state;
}

export default reducer;
