import { useReducer } from "react" ;

interface StateType {
    counter: number,
}

const initialState : StateType = {
     counter : 0
}

type ActionType  =                                           // any one from these Two   
   | {type : "INCREMENT" ; payload : number}
   | {type : "DECREMENT" ; payload : number};


const reducer = (state : StateType ,action: ActionType)  => {
    switch(action.type){
        case "INCREMENT" : 
           return { counter : state.counter + action.payload };
        case "DECREMENT" :  
           return { counter : state.counter - action.payload };
         default : 
          return state;
    }
}

// initialState Created 
// reducer created 
// dispatch Action 


const UseReducerUsage = () => {

    const [state,dispatch] = useReducer(reducer,initialState);

     const increment = () => {
        dispatch({
            type : "INCREMENT",
            payload : 1,
        })
     }
     const decrement = () => {
        dispatch({
            type : "DECREMENT",
            payload : 1,
        })
     }  

  return (
    <div className="usereducer">
        <h3> useReducer Usage with Counter  </h3>
           <div className="countcontainer">
                 <span> Count = {state.counter}  </span>
                 <div>
                    <button  onClick = {increment} > Add +   </button>
                    <button  onClick = {decrement} > Subtract - </button>
                 </div>
           </div>
    </div>
  )
}

export default UseReducerUsage