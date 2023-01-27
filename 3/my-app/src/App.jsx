// useContext
import { createContext, useContext } from "react";
import InputComponent from "./components/InputComponent";

const UserInfo = createContext({ name: "gray", id: "grayIsFree" })

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "white", id: "whiteIsFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = (props) => {
  console.log(props)
  const {name, id} = useContext(UserInfo)
  return  (
    <>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <InputComponent/>
    </>
  )};

export default App;