import { useState } from 'react'
import { Select, SelectOption } from './Select'

const options = [
  {
  label: 'first', value:1
  },  
{
  label: 'second', value:2
},  {
  label: 'third', value:3
},  {
  label: 'fourth', value:4
},{
  label: 'fifth', value:4
}

]


function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption| undefined> (options[0])// we set the return value of the state as the type of the first element in the array or undefined if its not present

  return (
    <>
      <Select multiple options={options} value={value1} onChange={o => setValue1(o)} />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </>
  )
}

export default App
