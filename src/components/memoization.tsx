import { useCallback, useMemo, useState } from 'react';

export function Memoization() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  const doubleCount = count * 2;

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <button onClick={increment}>increment</button>
    </div>
  );
}
