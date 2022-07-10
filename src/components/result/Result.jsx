import React from 'react'
import { useState } from 'react';

// const [userInput, changeInput] = useState("");

// const appendLetter = (input) => {
//     changeInput(userInput + input);
// }

const Result = () => {
    return (
        <div class="userAns">
            <div id="answer">
                <div id="answerDefaultValue">Your Answer: </div>
                <div id="ans"></div>
            </div>
            <div id="checker">
                <div id="checkerDefaultValue">Result: </div>
                <div id="check"></div>
                <div id="logo"></div>
            </div>
        </div>
    )
}

export default Result