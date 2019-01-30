import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./ducks/userReducer";

const middleware = applyMiddleware(promiseMiddleware());
const store = createStore(userReducer, middleware);

export default store;
