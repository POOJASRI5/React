import React, { useState, useReducer, useRef, useEffect } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function App() {

  // useReducer counter
  const [state, dispatch] = useReducer(reducer, initialState);

  // useState for text preview
  const [text, setText] = useState("");

  // useRef for focus
  const inputRef = useRef();

  // dark/light mode
  const [dark, setDark] = useState(false);

  // localStorage persistence
  useEffect(() => {
    const saved = localStorage.getItem("count");
    if (saved) {
      dispatch({ type: "RESET" });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", state.count);
  }, [state.count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={style}>

      <h2>1. Counter (useReducer)</h2>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <hr/>

      <h2>2. Live Text Preview</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>Preview: {text}</p>

      <hr/>

      <h2>3. useRef Focus</h2>
      <input ref={inputRef} type="text" placeholder="Click focus button" />
      <button onClick={focusInput}>Focus</button>

      <hr/>

      <h2>4. Dark / Light Mode</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

    </div>
  );
}

export default App;