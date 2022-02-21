import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function EffectHook() {
  const [data, setData] = useState("");
  const [userIndex, setUserIndex] = useState(0);

  const indexRef = useRef(null);

  const onChange = () => {
    setUserIndex(indexRef.current.value);
  };

  useEffect(() => {
    // Primarily for API calls
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[userIndex].email);
      });
  }, [userIndex]);

  return (
    <div>
      <p>Email: {data}</p>
      <div>
        <p>Set User Index:</p>
        <input
          type="number"
          ref={indexRef}
          placeholder="0"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default EffectHook;
