import { Suspense, useRef } from 'react';
import './App.css';
import { Memoization } from './components/memoization';
import { NoForwardRef } from './components/no-forward-ref';
import { UseHook } from './components/use-hook';

function App() {
  const boxEl = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-8">
      <Memoization />
      <div>
        <NoForwardRef ref={boxEl} className="bg-red-400/30 size-16" />
        {boxEl && boxEl.current && getComputedStyle(boxEl.current).width}
      </div>
      <Suspense fallback={<p>⌛ Fetching person...</p>}>
        <UseHook />
      </Suspense>
    </div>
  );
}

export default App;
