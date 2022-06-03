import React from 'react'
import userAns from "../App"
import finalAns from "../App"

function check(userAns, finalAns){
    if (userAns === finalAns) {
        console.log("hello");
        return true;
    }
}

export default check