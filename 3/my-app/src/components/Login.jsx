import React, { useState, useRef } from "react"
let user = {
    login: false,
    id: 'abc@g.com',
    nickname: 'jieun'
}

export const Login = (e) => {
    const idInput = useRef(null);
    const passwordInput = useRef(null);
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (idInput.current.value === "") {
            alert('아이디를 입력하지 않았습니다.')
            idInput.current.focus();
        }
        if (passwordInput.current.value === "") {
            alert('패스워드를 입력하지 않았습니다.')
            passwordInput.current.focus();
        }
        console.log(idInput)
        console.log(passwordInput)

        setId(idInput.current.value)
        setPassword(passwordInput.current.value)
        
        user['login'] = true
        console.log(user)
    }
    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
        setId(e.target.value);
    }

    const handlePasswordInput = (e) => {
        console.log("password", e.target.value);
        setPassword(e.target.value);
    }

    return (
        <form>
            <label>아이디: <input type="text" ref={idInput}/></label>
            <label>비밀번호: <input type="password" ref={passwordInput}/></label>
            <button type="submit" onClick={handleLoginSubmit}>로그인</button>
        </form>
    )
}