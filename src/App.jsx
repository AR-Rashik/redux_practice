import { useDispatch, useSelector } from "react-redux"
import { setBool, setCounter } from "../store/slices/counterSlice";
import "./App.css"
import { useState } from "react";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counterSlice.counter)
  const bool = useSelector(state => state.counterSlice.bool)

  const [state, setState] = useState('bola')
  console.log(state)

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(setCounter())}>Counter</button>
      <button onClick={() => dispatch(setBool(!bool))}>{bool ? 'True' : 'False'}</button>
      <div>
        <button onClick={() => {
          setState((prev) => {
            return prev = prev + '1'
          })
        }}>SetState</button>
      </div>
    </>
  );
}

export default App;
