import { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [100, 2]);

  return (
    <div>
      <p>{count}+</p>
    </div>
  );
};
export default Counter;
