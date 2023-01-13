import React, { useState } from 'react';
import { Login } from './components/Login';
import { Product } from './components/Product';
import './app.css'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  span {
    color: red;
    font-size: 12px
  }
`
const ContentDiv = styled.div`
  margin: 40px;
`
const ContentH2 = styled.h2`
  color: ${({name})=>(name === 'hello'? 'red':'black')}
  width: 200px;
  margin: 0 auto;
  text-align: center;
`
const Resume = (props) => {
  const [like, setLike] = useState(0)
  const [isLike, setIsLike] = useState(false)
  function clickLike() {
    setLike(like + 1)
    setIsLike(!isLike)
    console.log(like);
  }

  return (
    <ContentDiv>
      <ContentH2 name='hello'>{props.name} 자기소개서</ContentH2>
      <button onClick={clickLike}>like {like}</button>
      <span>{isLike ? '❤️' : ''}</span>
    </ContentDiv>
  )
}

const Greeting = () => {
  const [message, setMessage] = useState('')
  const onMouseEnter = () => {
    console.log('enter');
    setMessage('enter')
  };

  const onMouseLeave = () => {
    console.log('leave');
    setMessage('leave')
  };

  return (
    <>
      <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>on Mouse 👊</span>
      <span>{message}</span>
      <Product name="jieun" />
    </>
  )
}

function App() {

  const styleH2 = { border: 'solid 1px black', color: 'blue', fontSize: '32px' }
  return (
    <>
      <GlobalStyle />
      <h1 style={styleH2}>Hello</h1>
      <h1 style={styleH2}>Hello</h1>
      <Resume name='hello' />
      <Greeting />
      <Login />
    </>
  );
}

export default App;