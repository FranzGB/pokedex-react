import React from 'react';
const url:string = "https://pokeapi.co/api/v2/"
const getPokemonList = async (number:string, offset:string) => {
    const response = await fetch(url+`pokemon?limit${number}&offset=${offset}`)
    const pokelist = await response.json()
    return pokelist
}
function PokemonList () {
    
    return ();
}
export default PokemonList;
