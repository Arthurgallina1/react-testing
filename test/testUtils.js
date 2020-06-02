import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/store/reducers/rootReducer";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
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
