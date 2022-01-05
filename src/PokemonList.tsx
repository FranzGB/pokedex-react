import React, {useState, useEffect} from 'react';
import { useQuery, useQueryClient } from 'react-query'
import PokemonPreviewCard from './PokemonPreviewCard';


interface IPokemonListProps{
    number: number,
    offset: number
}
export interface pokemonData {
    name: string,
    url: string
}
export interface pokemonResponse {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  pokemonData[];
}
const fetchPokemonList = async (url:string) => fetch(url).then((res) => res.json())

function PokemonList ({number, offset}:IPokemonListProps) {
    const queryClient = useQueryClient();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/" + `pokemon?offset=${offset}&limit=${number}`)

    const { status, error, data, refetch } = useQuery<pokemonResponse, Error>(["pokeList",url],() => fetchPokemonList(url),{ keepPreviousData: true, staleTime: 5000 })

    React.useEffect(() => {
        if(data && data.next){
            queryClient.prefetchQuery(["pokeList", data.next], () =>
            fetchPokemonList(data.next as string)
          )
        }
      }, [data, url, queryClient])

    if (status == "loading") return <div>Loading...</div>;;

    if (status == "error") return <div>An error has occurred:{error!.message}</div>;

    return(
        <div className="flex items-center flex-col">
            <div className=" m-2 flex justify-between items-center flex-wrap">
                {data && data.results.map((pokemon:pokemonData,id:number)=> <PokemonPreviewCard name={pokemon.name} url={pokemon.url} key={id} />)}
            </div>
            <nav aria-label="Page navigation">
                <ul className="inline-flex">
                    <li><button onClick={()=>{setUrl(data!.previous as string)}} disabled={data!.previous == null} className="h-10 px-5 text-indigo-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
                    </li>
                    <li><button onClick={()=>{setUrl(data!.next as string)}} disabled={data!.next == null} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
                    </li>
                </ul>
            </nav>
      </div>
    )

}
export default PokemonList;
