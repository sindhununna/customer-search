import React from 'react'
// import { useAsyncDebounce } from 'react-table'

// export const GlobalFilter = ({ filter, setFilter }) => {
//   const [value, setValue] = useState(filter)
//   const onChange = useAsyncDebounce(value => {
//     setFilter(value || undefined)
//   }, 400)
//   return (
//     <span>
//      Customer Name:{' '}
//       <input
//         value={value || ''}
//         onChange={e => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//       />
//     </span>
//   )
// }
export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
     Customer Name:{' '}
      <input
        value={filter || ''}
        onChange={(e)=>setFilter(e.target.value)}      
      />
    </span>
  )
}