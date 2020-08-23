import { createStore } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {};

const store = createStore(rootReducers, initState, composeWithDevTools);

export default store;
