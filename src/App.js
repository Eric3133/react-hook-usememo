import { useState } from 'react';
import './App.css';
import { useMemo } from 'react';
// 缓存： 消耗非常大的计算结果，然后缓存起来，下次直接使用缓存的结果
function fib(n) {
  if (n < 3)
    return 1;
  return fib(n - 1) + fib(n - 2);
}

function App() {
  const [count1, setCount1] = useState(0);
  const res = useMemo(() => {
    // 返回计算的结果
    return fib(count1)
  }, [count1])
  // const res = fib(count1)
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <button onClick = { () => {
        setCount1(count1 + 1);
      }}>change count1: { count1 }</button>

      <button onClick = { () => {
              setCount2(count2 + 1);
            }}>change count2: { count2 }</button>

      { res}

    </div>
  );
}

export default App;
