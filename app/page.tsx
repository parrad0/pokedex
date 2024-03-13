import PokeCard from '@/components/card/pokeCard';
import { Button } from '@/components/ui/button';
import { fetchPokemonWithImages } from '@/lib/pokemon';
import Link from 'next/link';
export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};
const getRandomPokemonName = () => {
  const pokemonNames = ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur', 'Jigglypuff', /* Add more Pokemon names here */];
  const randomIndex = Math.floor(Math.random() * pokemonNames.length);
  return pokemonNames[randomIndex];
}
export default async function HomePage() {
  const pokemons = await fetchPokemonWithImages();
  return (
    <>
      <div className='max-w-sm md:max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'>
        <Link href={`/pokemon/${getRandomPokemonName()}`}><Button>Random Pokemon</Button></Link>
        {pokemons?.map((pokemon : any) => (
          <PokeCard key={pokemon.name} pokemon={pokemon}/>
        ))}
    </div>
    </>
  );
}
