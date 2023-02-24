import React, { useState } from 'react';

function RandomNumber(){
    const [num,setNum] = useState(0);

    function handleClick(e){
        const value = Math.floor(Math.random()*10);
        setNum(value);
    };

    return (<div>
        <h1>Number is {num}</h1>
        {
            (num === 7? <h3>You Won!!!!</h3> : <button onClick={handleClick}>Random Number</button>)
        }
    </div>);
}

export default RandomNumber;