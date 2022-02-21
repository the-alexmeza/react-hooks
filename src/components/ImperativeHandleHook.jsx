import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandleHook() {
  const buttonRef = useRef(null);
  return (
    <div>
      <p>Parent is changing state of Child component.</p>
      <button
        onClick={() => {
          buttonRef.current.changeToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleHook;
