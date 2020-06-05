import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/store/reducers/rootReducer";
import { middlewares } from "../src/store/store";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propsError).toBeUndefined();
};
