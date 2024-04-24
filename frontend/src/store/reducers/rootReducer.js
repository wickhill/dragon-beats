import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";


//combine reducers
const rootReducer = combineReducers({
session: sessionReducer
});

export default rootReducer;