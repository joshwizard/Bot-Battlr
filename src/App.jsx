import { useEffect, useState } from 'react'
import './App.css'
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection'

function App() {
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
  }, [])

  function handleAddBot(bot) {
    if(!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot])
    }
  }

  function handleReleaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id))
  }

  function handleDeleteBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE"})
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id))
        setBots(bots.filter((b) => b.id !== bot.id))
      })
  }

  return (
    <>
      <div>
        <YourBotArmy 
        bots={army}
        onRelease={handleReleaseBot}
        onDelete={handleDeleteBot}
        />
        <BotCollection bots={bots} onAdd={handleAddBot} />
      </div>
    </>
  )
}

export default App
