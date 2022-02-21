import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

// useMemo is primarily for performance, might use if doing computation on the front end.

function MemoHook() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false); // Without useMemo, updating toggle will re-compute the longest name

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was computed");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]); //2nd arg is dependency array

  return (
    <div>
      <p>Longest name: {getLongestName}</p>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default MemoHook;
