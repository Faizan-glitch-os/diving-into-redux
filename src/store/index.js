import { createStore } from "redux";

const initialValue = { counter: 0, showCounter: true };

function counterReducer(state = initialValue, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increaseBy10") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
