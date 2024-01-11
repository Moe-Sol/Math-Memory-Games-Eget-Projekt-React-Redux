import  firstReducer from "./firstReducer";
import  secondReducer from "./secondReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    firstReducer,
    secondReducer
})

export default allReducers;