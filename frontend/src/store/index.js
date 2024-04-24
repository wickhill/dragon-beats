import {createStore, applyMiddleware} from "redux"
import rootReducer from "./reducers/rootReducer"
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk"


const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware, logger)))

export default store