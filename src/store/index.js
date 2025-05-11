import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "increaseBy10") {
    return { counter: state.counter + action.amount };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
