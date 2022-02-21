import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("Function called");
  }, [returnComment]);

  return <div>{returnComment(" test")}</div>;
}

export default Child;
