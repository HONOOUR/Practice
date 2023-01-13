import React, { useState } from "react"
let user = {
    login: false,
    id: 'abc@g.com',
    nickname: 'jieun'
}

export const Login = (e) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        if (id === '') {
            alert('아이디를 입력하지 않았습니다.')
        }
        if (password === '') {
            alert('패스워드를 입력하지 않았습니다.')
        }
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
            <label>아이디: <input type="text" onChange={handleLoginInput}/></label>
            <label>비밀번호: <input type="password" onChange={handlePasswordInput}/></label>
            <button type="submit" onClick={handleLoginSubmit}>로그인</button>
        </form>
    )
}