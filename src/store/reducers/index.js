import { combineReducers } from "redux";
import posts from './post_reducers'

const appReducers = combineReducers({
    posts
})

export default appReducers;