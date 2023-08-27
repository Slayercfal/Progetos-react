import { useState } from 'react'
import { Link } from 'react-router-dom'
import RotasApp from './routes'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <RotasApp/>
      </div>
    </>
  )
}

export default App
