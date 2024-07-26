import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterView from './app/features/counter/CounterView'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
<CounterView/>
 </div>
  )
}

export default App
