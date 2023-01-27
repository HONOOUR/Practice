import { useRef, useState, useMemo } from 'react';

function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState("")
  const [id, setId] = useState("")

  const handleInputName = (e) => {
    setName(e.target.value)
    console.log('render 1')
  }

  const handleInputId = (e) => {
    setId(e.target.value)
    console.log('render 2')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newInfo = [...userInfo, {name, id}]
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo)
    console.log('render 3')

  }

  const getNum = useMemo(() => {
    console.log('render getNum')
    return userInfo.length
  }, [userInfo])

  return (
    <>
      <form>
        <input type="text" placeholder="ENTER NAME" onChange={handleInputName} ref={inputName} />
        <input type="text" placeholder="ENTER ID" onChange={handleInputId} ref={inputId} />
        <button type='submit' onClick={handleSubmit}>BUTTON</button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>

          </li>
        ))}
      </ul>
      <span>{getNum}</span>
    </>
  );
}

export default App;