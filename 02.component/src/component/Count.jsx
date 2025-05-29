import React, { useState } from 'react'; // useState 추가

const Count = () => {
    let count = 0;
    const [count2, setCount2] = useState(0);

    const handleClick = () => {
        count += 1;
        console.log('일반변수:', count);
    }

    const handleClick2 = () => {
        setCount2(count2 + 1);
    }

    return (
        <div>
            <div>
                <p>일반변수: {count}</p>
                <button onClick={handleClick}>클릭+1</button>
            </div>
            <div>
                <p>state: {count2}</p>
                <button onClick={handleClick2}>클릭+1</button>
            </div>
        </div>
    )
}

export default Count
