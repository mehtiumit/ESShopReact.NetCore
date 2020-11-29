import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
  );
}
