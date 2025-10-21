import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="bot-grid">
      {army.length > 0 ? (
        army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRelease(bot)}
            handleDelete={() => onDischarge(bot)}
          />
        ))
      ) : (
        <p className="empty">No bots enlisted yet.</p>
      )}
    </div>
  );
}

export default YourBotArmy;
