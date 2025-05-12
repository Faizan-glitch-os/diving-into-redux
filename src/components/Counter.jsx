import classes from "./Counter.module.css";

import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store";

const Counter = () => {
  const counterDispatcher = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);

  function handleCounterValue(btnWork) {
    if (btnWork === "increase") {
      counterDispatcher(counterActions.increment());
    }

    if (btnWork === "decrease") {
      counterDispatcher(counterActions.decrement());
    }

    if (btnWork === "increaseBy10") {
      counterDispatcher(counterActions.increaseAmount(10));
    }

    if (btnWork === "toggleVisibility") {
      counterDispatcher(counterActions.toggleCounter());
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
