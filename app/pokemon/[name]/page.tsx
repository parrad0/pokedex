import { notFound } from 'next/navigation';

import Carousel from '@/components/carousel';
import PokemonDescription from 'components/pokemon-description';
import { fetchPokemon } from 'lib/pokemon';
export const runtime = 'edge';


export default async function ProductPage({ params }: { params: { name: string } }) {
  const pokemon = await fetchPokemon(params.name);
  if (!pokemon) return notFound();



  return (
    <>
      <div className="mx-auto max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='w-full relative '>
          <Carousel urls={pokemon.images} />
        </div>
        <div className="basis-full lg:basis-2/6 rounded-xl bg-gray-100">
          <PokemonDescription pokemon={pokemon} />
        </div>
      </div>
    </>
  );
}


