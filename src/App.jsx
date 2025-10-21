import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function addToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots${bot.id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      });
  }

  return (
    <div className="app-container">
      <h1 className="title">🤖 Bot Battlr</h1>

      {/* Upper Section */}
      <section className="army-section">
        <h2>Your Bot Army</h2>
        <YourBotArmy
          army={army}
          onRelease={releaseFromArmy}
          onDischarge={dischargeBot}
        />
      </section>

      {/* Lower Section */}
      <section className="collection-section">
        <h2>All Bots</h2>
        <BotCollection bots={bots} onAdd={addToArmy} />
      </section>
    </div>
  );
}

export default App;
