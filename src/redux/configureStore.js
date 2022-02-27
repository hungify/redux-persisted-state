import throttle from "lodash/throttle";
import { applyMiddleware, createStore } from "redux";
import { loadStateLocalStorage, saveStateLocalStorage } from "./localStorage";
import { loadStateSessionStorage, saveStateSessionStorage } from "./sessionStorage";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { interceptor } from "../apis/axiosClient";

const configureStore = () => {
  const myMiddleware = () => (next) => (action) => {
    if (action.type === "todo/add" && action.payload === "fuck") {
      action.payload = "****";
    }
    return next(action);
  };

  const middlewares = [thunk, myMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const persistedAuth = loadStateLocalStorage("auth");
  const persistedTodos = loadStateSessionStorage("todos");

  const persistedState = {
    ...persistedTodos,
    ...persistedAuth,
  };
  const store = createStore(rootReducer, persistedState, composedEnhancers);

  interceptor(store);
  store.subscribe(
    throttle(() => {
      saveStateLocalStorage("auth", {
        auth: store.getState().auth,
      });
      saveStateSessionStorage("todos", {
        todos: store.getState().todos,
      });
    }, 1000)
  );
  return store;
};

export default configureStore;
