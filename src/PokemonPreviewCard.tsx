import React from "react";
interface IPokemonPreview {
    name: string;
    image: string;
    types: string[];
}
const PokemonPreviewCard = (props:IPokemonPreview) => (
    <div className="rounded overflow-hidden shadow-lg">
        <img className="" src={props.image}></img>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
            {props.types.map(type => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type}</span>)}
        </div>
    </div>
)

export default PokemonPreviewCard;
