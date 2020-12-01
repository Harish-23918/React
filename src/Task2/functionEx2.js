import React from 'react';

function Counter() {
    let n = 0;

    function increment() {
        n = n + 1;
        console.log(n);
    }

    return (
        <div>
            <span>{n}</span>
            <button onClick={increment}>Increment </button>
        </div>
    );
}

export default Counter;