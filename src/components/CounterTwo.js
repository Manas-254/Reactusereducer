import React, { useReducer} from 'react'

let initialState={
    firstCounter:0,
    secondCounter:0,
};

let reducer=(prevState,action)=>{
    switch (action.type) {
        case "increment1":
            return{
                ...prevState,
                firstCounter:prevState.firstCounter+1,
            };
        case "decrement1":
            return{
                ...prevState,
                firstCounter:prevState.firstCounter-1,
            };
        case "reset1":
            return{
                ...prevState,
                firstCounter:initialState.firstCounter,
            };
            case "increment2":
                return{
                    ...prevState,
                    secondCounter:prevState.secondCounter+1,
                };
            case "decrement2":
                return{
                    ...prevState,
                    secondCounter:prevState.secondCounter-1,
                };
            case "reset2":
                return{
                    ...prevState,
                    secondCounter:initialState.secondCounter,
                };
        default:
           return{ ...prevState,
           };
    }
};

function CounterTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
            <p>CounterOne:{state.firstCounter}</p>
            <button onClick={()=>dispatch({type:"increment1"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement1"})}>decrement</button>
            <button onClick={()=>dispatch({type:"reset1"})}>reset</button>
            </div>
            <div>
            <p>CounterTwo:{state.secondCounter}</p>
            <button onClick={()=>dispatch({type:"increment2"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement2"})}>decrement</button>
            <button onClick={()=>dispatch({type:"reset2"})}>reset</button>
            </div>
        </div>
    );
}

export default CounterTwo
