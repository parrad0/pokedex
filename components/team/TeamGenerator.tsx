import { fetchPokemonTeam } from "@/lib/pokemon";
import PokeCard from "../card/pokeCard";

const TeamGenerator = async ({ types, members }: { types: string, members: number }) => {
    console.log('Types:', types);
    console.log('Members:', members);
    const pokemons = await fetchPokemonTeam({ types: types, limit: members })
    return (
        <div className="w-full">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
                {
                    pokemons.map((pokemon: any) => (
                        <PokeCard pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}
export default TeamGenerator