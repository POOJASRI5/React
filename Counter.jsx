
import React, { useState } from "react";
 function Counter(){
        const [count, setCount] = useState(0);   //so if we use count use setCount also and if we declared as count1 then setCount1 
        return (
            <>
            <h1>Counter:{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            </>
        );
 }
 export default Counter;