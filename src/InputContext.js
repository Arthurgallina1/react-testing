import React from "react";

export default function InputContext({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div>
            <div className='component-input' data-test='component-input'>
                <form action='' className='form-inline'>
                    <input
                        type='text'
                        className='mb-2 mx-sm-3'
                        placeholder='guess'
                        data-test='input-box'
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value)}
                    />
                    <button className='btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}
