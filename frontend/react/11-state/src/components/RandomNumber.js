import { useState } from 'react';
import generateRandomNum from '../utils/GenerateRandomNum' 

export default function RandomNumber({ max_value }) {
    const [randomNum, setRandomNum] = useState(generateRandomNum(max_value));
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(max_value))
    }
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new one</button>
        </div>
    );
}
