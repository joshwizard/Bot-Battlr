import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-img" />
      
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p className="class">{bot.bot_class}</p>
        
      </div>

      <div className="bot-stats flex p-5 gap-3">
        <div className="stat">
          <span className="icon">❤️</span>
          <span>{bot.health}</span>
        </div>
        <div className="stat">
          <span className="icon">⚔️</span>
          <span>{bot.damage}</span>
        </div>
        <div className="stat">
          <span className="icon">🛡️</span>
          <span>{bot.armor}</span>
        </div>
      </div>

      {handleDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(bot);
          }}
        >
          🗑️
        </button>
      )}
    </div>
  );
}

export default BotCard;
