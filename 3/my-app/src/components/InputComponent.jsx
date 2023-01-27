
import React from 'react'
import useInput from './useInput';

// export default function InputComponent() {
//   const [value, setValue] = useState('');
//   const onChange = (e) => {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//         <input type="text" onChange={onChange}></input>
//         <div>
//             {value}
//         </div>
//     </>
//   )
// }


export default function InputComponent() {
  const [value, onChange] = useInput('');
  return (
    <>
      <input type="text" onChange={onChange}></input>
      <div>{value}</div>
    </>
  )
}
