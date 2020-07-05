import React from "react";

const userOutput = ({ name, styleClasses }) => (
    <p className={ styleClasses }>
      Hello there, { name }!
    </p>
);

export default userOutput;