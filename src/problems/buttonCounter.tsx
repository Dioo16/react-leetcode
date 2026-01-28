/**
 * Button Counter Component
 * 
 * A simple counter component that increments on button click and can be reset.
 * 
 * Features:
 * - Increment counter by 1 on button click
 * - Reset counter to 0 with reset button
 */

import { useState } from "react";

function ButtonCounter() {
    const [count, setCount] = useState(0);

    return (
        <>
        <button onClick={ () => setCount(count + 1)}>
            {count}
        </button>
        <button onClick={ () => setCount(0)}>
            reset the count
        </button>
        </>
    )
    
}

export default ButtonCounter;