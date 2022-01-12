import React from "react";
import {Link} from "react-router-dom";

interface IPokemonPreviewProps {
    name: string;
    url: string;
}
const PokemonPreviewCard = (props:IPokemonPreviewProps) => (
    <div className="rounded-lg overflow-hidden shadow-lg">
        <img className="" ></img>
        <div className="px-6 py-4">
            <Link className="font-bold text-xl mb-2 no-underline" to={`/pokemon/${props.url.substring(34)}`} >{props.name}</Link>
        </div>
    </div>
)

export default PokemonPreviewCard;
