import React, { useReducer } from 'react';

type CounterType = {
    counterValue: number;
}

type UpdateAction = {
    type: "INCREASE" | "DECREASE";
    payload: number;
}

type ResetAction = {
    type: "RESET";
}
type ActionType = UpdateAction | ResetAction;

const intitalState = {
    counterValue: 0,
};

const counterReducer = (state: CounterType, action: ActionType) => {
    switch (action.type) {
        case "INCREASE": 
            return {
                counterValue: state.counterValue + action.payload
            }
        case "DECREASE":
            return {
                counterValue: state.counterValue - action.payload
            }
        case "RESET":
            return intitalState;
        default:
            return state;
    };
}

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, intitalState);

    return (
        <>
            count: {state.counterValue}
            <button onClick={() => dispatch({type: "INCREASE", payload:10})}>increament</button>
            <button onClick={() => dispatch({type: "DECREASE", payload:5})}>dectrament</button>
            <button onClick={() => dispatch({type: "RESET"})}>reset</button>
        </>
    );
};

export default Counter;