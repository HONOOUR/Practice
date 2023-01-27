import React from 'react'
import { useEffect, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    const [init, setInit] = useState(false)
    const handleCountUp = (e) => {
        setCount(count + 1)
    }
    
    useEffect(() => {
        if (init) {
            if (count%2) {
                alert('odd')
            } else {
                alert('even')
            }
        }
        setInit(true)
    }, [count])

    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>Up!</button>
        </>
    )
}
