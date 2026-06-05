import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
  console.log("mounted");
  const timer = setInterval(() => {
    renderCount.current += 1;
  }, 1000);

    return(() => {
      clearImmediate(timer)
    })
  }, [count])
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}