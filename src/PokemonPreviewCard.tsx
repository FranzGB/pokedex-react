import React from "react";
interface IPokemonPreviewProps {
    name: string;
    url: string;
}
const PokemonPreviewCard = (props:IPokemonPreviewProps) => (
    <div className="rounded overflow-hidden shadow-lg">
        <img className="" ></img>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
            Info
        </div>
    </div>
)

export default PokemonPreviewCard;
