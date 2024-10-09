'use client';

import { useEffect, useState } from "react";


export default function Counter () {
    const [count, setCount] = useState(0);

    useEffect(() => {

    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <h3>
                Counter: {count}
            </h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}