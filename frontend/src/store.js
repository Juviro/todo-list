import { compose, applyMiddleware, createStore } from "redux";

import middlewares from "./middlewares/";
import reducers from "./reducers";

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function makeStore() {
  let enhancer;

  if (!isProduction()) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    );
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }

  return createStore(reducers, enhancer);
}

const store = makeStore();

export default store;
