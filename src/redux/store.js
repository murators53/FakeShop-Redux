import ProductReducers from "./reducers/ProductReducers";
import { createStore, combineReducers } from "redux";

const rootReduce = combineReducers ({
  allProducts: ProductReducers,
});

const store = createStore(
  rootReduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
