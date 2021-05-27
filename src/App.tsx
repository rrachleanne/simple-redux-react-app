import React from "react";

import "./App.css";
// import {RootState} from 'typesafe-actions';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
    //accces to entire state to pull out what you need to access.
    const counter: any = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();

    return (
      // passing an arugment to increase the count by 2 rather than 1
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(2))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? (
                <h3> valuable information that you shouldn't see</h3>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
