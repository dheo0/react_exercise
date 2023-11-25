import React, { useState, useRef } from "react";

// 리액트에서는 객체의 불변성을 지켜줘야 한다

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname } = inputs
    const onChange = (e) => {
        const {value, name} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus()
    }
    const nameInput = useRef()
    return (
        <div>
            <input name="name" value={name} onChange={onChange} placeholder="이름" ref={nameInput} />
            <input name="nickname" value={nickname} onChange={onChange} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} {nickname}</b>
            </div>
        </div>
    )
}

export default InputSample;