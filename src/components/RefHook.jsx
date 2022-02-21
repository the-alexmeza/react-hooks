import React, { useRef, useState } from "react";

function RefHook() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Name");

  const onClick = () => {
    setName(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <p>{name}</p>
      <input type="text" placeholder="Name" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefHook;
