import React from "react";
import { shallow } from "enzyme";
// import checkPropTypes from "check-prop-types";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

//test render and props.
test("renders without error ", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttribute(wrapper, "component-congrats");
    console.log(wrapper.debug());
    expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttribute(wrapper, "component-congrats");
    console.log(component.debug());
    expect(component.text()).toBe("");
});

test("renders non-empty congrats message when success props is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttribute(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
});

//test prop types
test("does not throw warning with expected props", () => {
    const expectedProps = { success: false };
    const propError = checkProps(Congrats, expectedProps);
    //if props passes test => error = undefined
    expect(propError).toBeUndefined();
});
