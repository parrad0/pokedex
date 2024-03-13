// Asegúrate de incluir 'use client' si estás utilizando este componente en Next.js 13 o superior y quieres que se ejecute solo en el cliente.
'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const PokemonGallery = ({ pokemons } : any) => {
  return (
    <div className='max-w-sm md:max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'>
      {pokemons?.map((pokemon : any) => (
        <div key={pokemon.id} className='flex flex-col items-center'>
          <div className='relative w-full h-full bg-green-200 rounded-full overflow-hidden'>
            <AspectRatio className='relative bg-green-100' ratio={16/9}>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                objectFit='cover'
              />
            </AspectRatio>
          </div>
          <h3 className="mt-2 font-bold text-center">{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PokemonGallery;
