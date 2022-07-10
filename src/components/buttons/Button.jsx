import { useState } from 'react';
import userAns from "../../functions/userAns";

const Button = ({text}) => {
    return (
        <button className='btn' onClick={() => {userAns({text})}}>{text}</button>
    )
}

export default Button;