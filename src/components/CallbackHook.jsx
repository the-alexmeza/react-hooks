import React, { useState, useCallback } from "react";
import axios from "axios";
import Child from "./Child";

function CallbackHook() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is some data");

  // useMemo lets you store a value returned by a function
  // useCallback lets you store the function itself
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <p> toggle </p>}
    </div>
  );
}

export default CallbackHook;
