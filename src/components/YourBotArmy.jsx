import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDelete}) {
    return (
        <div>
            {bots.map((bot) => (
                <BotCard 
                key={bot.id}
                bot={bot}
                handleClick={() => onRelease(bot)}
                handleDelete={() => onDelete(bot)}
                />
            ))}
        </div>
    )
}

export default YourBotArmy