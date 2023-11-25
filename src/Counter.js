import React, { useState, useReducer} from "react";

function reducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
        default:
            return state
    }
}

function Counter() {
    // const [number, setNumber] = useState(0) // [현재상태, setter함수]
    const [number, dispatch] = useReducer(reducer, 0)

    const onIncrease = () => {
        // setNumber(prevNumber => prevNumber + 1)
        dispatch({type: 'INCREMENT'})
    }
    const onDecrease = () => {
        // setNumber(prevNumber => prevNumber - 1)
        dispatch({type: 'DECREMENT'})
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
/**
 * reducer 란 현재상태 와 액션 객체를 파라미터로 받아와서
 * 새로운 상태를 반환해주는 함수
 * action: 업데이트를 위한 정보를 가지고 있다
 * type 값을 지닌 객체 형태로 사용, 규칙은 없다
 */
export default Counter;