import React from "react";
import { shallow } from "enzyme";
import InputContext from "./InputContext";
import { findByTestAttribute } from "../test/testUtils";

const setup = (secretWord = "party") => {
    return shallow(<InputContext secretWord={secretWord} />);
};

describe("state controlled input field", () => {
    test("state updates with value of input box upon change", () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]); //replace o useState do codigo por esse aqui ( é um useState)

        const wrapper = setup();
        const inputBox = findByTestAttribute(wrapper, "input-box");
        //criar um evento mock e aplicar no input box
        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });
});
