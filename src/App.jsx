import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState({})

  useEffect(()=>{
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(err => setError(err))

  }, [])
  const agents = data?.filter(item => item.isPlayableCharacter)

    console.log(data)
  return (
    <>
      <h1>valorant!!</h1>
      <ul>
        {agents.map(item => (
          <>
          
            <li key={item.uuid}>{item.displayName}</li>
            <img src={item.displayIcon} alt={item.displayName} />

          </>
          
        ))}
      </ul>
    </>
  )
}

export default App
