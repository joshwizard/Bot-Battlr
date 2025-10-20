import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
    return (
        <div>
            {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot} handleClick={() => onAdd(bot)} />
            ))}
        </div>
    )
}

export default BotCollection