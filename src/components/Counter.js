import {useState} from "react";
function Counter() {
    const [count, setcount]=useState(0)
    return(
        <div className="bus">
            <button onClick={() => setcount(count+1)} style={{backgroundColor: "green", color: "white", height: 20, width: 150, borderRadius: 10}}>BOOKING</button>
            <div>NUMBER BOOKINGS:{count}</div>
            <button onClick={() => setcount(count-1)} style={{backgroundColor: "blue", color: "white", height: 20, width: 150, borderRadius: 10}}>REVERSE</button>
        </div>
    )
}
export default Counter;