import { useState } from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  return { count, increment, decrement };
}
