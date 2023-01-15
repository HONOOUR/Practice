import { BrowserRouter, Router, Route, Link } from "react-router-dom";

const Test = () => {
  return <p>test</p>
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/" >home</Link>
        <Link to="/one" >one</Link>
        <Link to="/two" >two</Link>
        <Link to="/three" >three</Link>
        <Router>
          <Route path="/" element={<Test/>}/>
          <Route path="/one" element={<Test/>}/>
          <Route path="/two" element={<Test/>}/>
          <Route path="/three" element={<Test/>}/>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;