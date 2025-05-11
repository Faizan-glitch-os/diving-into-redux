import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);
  const counterDispatcher = useDispatch();

  function handleCounterValue(action) {
    if (action === "increase") {
      counterDispatcher({ type: "INCREMENT" });
    }

    if (action === "decrease") {
      counterDispatcher({ type: "DECREMENT" });
    }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={() => handleCounterValue("increase")}>+</button>
        <button onClick={() => handleCounterValue("decrease")}>-</button>
      </div>
    </main>
  );
};

export default Counter;
