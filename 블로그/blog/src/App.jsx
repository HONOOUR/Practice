import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PostDetail from "./page/PostDetail";
import UserContext from "./context/UserContext";
// import './app.css'
// styled component test
import { GlobalStyle } from "./AppStyle";

function App() {
  const [userId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userId, isLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App;
