
import React from 'react'
import { useState } from 'react';

// export default function SomethingComponent() {
//   const [value, setValue] = useState('');
//   const onChange = (e) => {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//         <input type="text" onChange={onChange}></input>
//         <div>
//             {value} more value
//         </div>
//     </>
//   )
// }

import React from 'react'
import useInput from './useInput';

export default function SomethingComponent() {
  const [value, onChange] = useInput('')
  return (
    <>
      <input type="text" onChange={onChange}></input>
      <div>{value} more value</div>
    </>
  )
}
