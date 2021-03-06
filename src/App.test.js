import React from "react";
// import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the app component.
 * @function setup
 * @param {object} props - Component props
 * @param {object} state  - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }

  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper;
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
test("no err", () => {});

// test("renders without error", () => {
//   // const wrapper = shallow(<App />); //returna um shallow wrapper; shallow rendering API
//   //debug retorna DOM as a string;
//   // console.log(wrapper.debug());
//   // expect(wrapper).toBeTruthy();

//   const wrapper = setup();

//   const appComponent = wrapper.find("[data-test='component-app']");
//   expect(appComponent.length).toBe(1); //asertion
// });

// test("renders increment button", () => {
//   const wrapper = setup();
//   const button = findByTestAttribute(wrapper, "increment-button");
//   expect(button.length).toBe(1);
// });

// test("renders counter display", () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttribute(wrapper, "counter-display");
//   expect(counterDisplay.length).toBe(1);
// });
// //testa estado
// test("counter starts at 0", () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state("counter");

//   expect(initialCounterState).toBe(0);
// });

// //testa funcionalidade
// test("clicking button increments counter display", () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//   //find button and click
//   const button = findByTestAttribute(wrapper, "increment-button");
//   button.simulate("click");

//   //find display and test value
//   const counterDisplay = findByTestAttribute(wrapper, "counter-display");
//   expect(counterDisplay.text()).toContain(counter + 1); //retorna texto dentro do elemento ex: <span> 1 </span>
// });

// test("clicking button decrements counter display", () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });

//   const button = findByTestAttribute(wrapper, "decrement-button");
//   button.simulate("click");

//   const counterDisplay = findByTestAttribute(wrapper, "counter-display");
//   expect(counterDisplay.text()).toContain(counter - 1);
// });

// test("counter doesn't go below 0 and displays error msg", () => {
//   const counter = 0;
//   const wrapper = setup(null, { counter });

//   const button = findByTestAttribute(wrapper, "decrement-button");
//   button.simulate("click");
//   const counterDisplay = findByTestAttribute(wrapper, "counter-display");

//   const showErrState = wrapper.state("showErr");
//   expect(showErrState).toBe(true);

//   const errMsg = findByTestAttribute(wrapper, "error-msg");
//   // expect(errMsg).toBeTruthy();
//   expect(wrapper.contains(errMsg)).toBeTruthy();

//   expect(counterDisplay.text()).toContain(0);
// });

// test("remove error msg when increment is clicked", () => {
//   const wrapper = setup();

//   const button = findByTestAttribute(wrapper, "increment-button");
//   button.simulate("click");
//   const errMsg = findByTestAttribute(wrapper, "error-msg");
//   expect(errMsg).toBeFalsy();
// });
