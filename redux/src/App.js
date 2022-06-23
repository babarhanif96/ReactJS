import React from 'react'
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
       <div>
   
   <input id='inp' type="number" value={changeTheNumber} />
   <br></br>
   <button id="add" onClick={() => dispatch(incNumber())}>+</button>
   <button id="subtract" onClick={() => dispatch(decNumber())}>-</button>
 </div>
    </> 
  )
}
// onClick={() => dispatch(decNumber())}

export default App


