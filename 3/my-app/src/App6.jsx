// context API
import { createContext } from "react";

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
  return (
    <UserInfo.Consumer>
      {(value) => (
        <>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
        </>
      )}
    </UserInfo.Consumer>
  );
};

export default App;