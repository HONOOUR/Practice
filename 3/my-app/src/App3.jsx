import { BrowserRouter, Router, Route, Link, Routes, useLocation, Outlet } from "react-router-dom";

const Home = () => {
  return <p>home</p>
}
const One = () => {
  return <p>one</p>
}
const Two = () => {
  return <p>two</p>
}
const Three = () => {
  return <p>three</p>
}
const ThreeOne = () => {
  return <p>three11</p>
}
const ThreeTwo = () => {
  return <p>three22</p>
}
const Blog = () => {
  const location = useLocation()
  console.log(location)
  return <p>blog .....</p>
}

function App() {
  return (
    <>
      <p>test</p>
      <BrowserRouter>
        <Link to="/" > home </Link>
        <Link to="/one" > one </Link>
        <Link to="/two" > two </Link>
        <Link to="/three" > three </Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/one" element={<One/>}/>
          <Route path="/two" element={<Two/>}/>
          <Route path="/three/*" element={<Outlet/>}>
            <Route path="" element={<Three/>} />
            <Route path="one/" element={<ThreeOne/>} />
            <Route path="two/" element={<ThreeTwo/>} />
          </Route>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;