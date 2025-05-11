import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);
  const counterDispatcher = useDispatch();

  function handleCounterValue(action) {
    if (action === "increase") {
      counterDispatcher({ type: "INCREMENT" });
    }

    if (action === "decrease") {
      counterDispatcher({ type: "DECREMENT" });
    }

    if (action === "increaseBy10") {
      counterDispatcher({ type: "increaseBy10", amount: 10 });
    }

    if (action === "toggleVisibility") {
      counterDispatcher({ type: "TOGGLE_COUNTER" });
    }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={() => handleCounterValue("toggleVisibility")}>
        Toggle Counter
      </button>
      <div>
        <button onClick={() => handleCounterValue("increase")}>+</button>
        <button onClick={() => handleCounterValue("increaseBy10")}>+10</button>
        <button onClick={() => handleCounterValue("decrease")}>-</button>
      </div>
    </main>
  );
};

export default Counter;
