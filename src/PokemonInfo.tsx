import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { IPokemon } from './interfaces'
interface PokemonInfoProps {

}
const fetchPokemonInfo = async (url:string) => fetch(url).then((res) => res.json());
function PokemonInfo( ){
  let { pokemonId } = useParams();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + `${pokemonId}`)
  const { status, error, data} = useQuery<IPokemon, Error>(["pokeInfo",url],() => fetchPokemonInfo(url!))
  if (status == "loading") return <div>Loading...</div>;;
  if (status == "error") return <div>An error has occurred:{error!.message}</div>;
  console.log(data);
  return (
    <div className="flex">
      <img src={data!.sprites.other!['official-artwork'].front_default} />
      <div className="w-1/2">
        Id: {pokemonId || data!.id}
      </div>
      <div className="w-1/2">
        Name: {data!.name}
      </div>
    </div>
  )
}

export default PokemonInfo

