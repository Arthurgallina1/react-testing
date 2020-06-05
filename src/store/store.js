import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export const middlewares = [ReduxThunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlewares(rootReducer);
