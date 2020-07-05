import React from "react";

const userInput = ({ value, onChangeHandler, styleClasses }) => (
    <input
        type='text'
        className={ styleClasses }
        defaultValue={ value }
        value={ value }
        onChange={ onChangeHandler }
    />
);

export default userInput;