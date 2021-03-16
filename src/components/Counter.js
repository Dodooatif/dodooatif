import {useState} from "react";
function Counter() {
    const [count, setcount]=useState(0)
    return(
        <div className="bus">
            <button onClick={() => setcount(count+1)}>add</button>
            <div>count:{count}</div>
            <button onClick={() => setcount(count-1)}>minus</button>
        </div>
    )
}
export default Counter;