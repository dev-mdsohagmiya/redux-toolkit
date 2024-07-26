import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increseByAmount, reset } from "./counterSlice";

function CounterView() {
    const count = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    console.log(count)
    return ( <div>

        <div>
            <h1>Counter App</h1>
            <h4>Count:{count.count}</h4>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <button onClick={()=>dispatch(increseByAmount(5))}>increseby5</button>
        </div>
    </div> );
}

export default CounterView;