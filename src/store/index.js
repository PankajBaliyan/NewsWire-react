import { createStore, applyMiddleware, compose } from "redux";
import PromiseMiddleware from "redux-promise";
import appReducers from "./reducers";

const ReduxStore = () => {
    const webToolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhancers = applyMiddleware(PromiseMiddleware);
    const composeEnhancers = webToolEnhancers(middlewareEnhancers);
    const store = createStore(appReducers, composeEnhancers);
    return store;
}

export default ReduxStore;