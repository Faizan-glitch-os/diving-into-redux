import { createStore } from "redux";

function counterReducer(state = 0, action) {
  if (action.type === "ICREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
}

const store = createStore(counterReducer);

export default store;
