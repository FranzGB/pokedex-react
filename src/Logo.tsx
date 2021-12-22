import React from "react";
import img from './assets/pokedex-icon.png'
const Logo = () => (
    <div className="flex items-center text-4xl mx-4">
        Pokédex
        <img className="flex h-20 w-auto z-10 max-w-full" src={img} />
    </div>
)

export default Logo;
