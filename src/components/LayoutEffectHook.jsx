import React, { useEffect, useLayoutEffect, useRef } from "react";

function LayoutEffectHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // useEffect is called after everything is rendered,
  // useLayoutEffect is called before.
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  return (
    <div>
      <p>(Check console.log)</p>
    </div>
  );
}

export default LayoutEffectHook;
