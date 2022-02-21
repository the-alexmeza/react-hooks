import logo from "./logo.svg";
import "./App.css";
import StateHook from "./components/StateHook";
import ReducerHook from "./components/ReducerHook";
import EffectHook from "./components/EffectHook";
import RefHook from "./components/RefHook";
import LayoutEffectHook from "./components/LayoutEffectHook";
import ImperativeHandleHook from "./components/ImperativeHandleHook";
import ContextHook from "./components/ContextHook";
import MemoHook from "./components/MemoHook";
import CallbackHook from "./components/CallbackHook";

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <StateHook></StateHook>
      <hr></hr>
      <h1>useReducer</h1>
      <ReducerHook></ReducerHook>
      <hr></hr>
      <h1>useEffect</h1>
      <EffectHook></EffectHook>
      <hr></hr>
      <h1>useRef</h1>
      <RefHook></RefHook>
      <hr></hr>
      <h1>useLayoutEffect</h1>
      <LayoutEffectHook></LayoutEffectHook>
      <hr></hr>
      <h1>useImperativeHandle</h1>
      <ImperativeHandleHook></ImperativeHandleHook>
      <hr></hr>
      <h1>useContext</h1>
      <ContextHook></ContextHook>
      <hr></hr>
      <h1>useMemo</h1>
      <MemoHook></MemoHook>
      <hr></hr>
      <h1>useCallback</h1>
      <CallbackHook></CallbackHook>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
