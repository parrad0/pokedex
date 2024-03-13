import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"

const PokeCard = ({ pokemon }: any) => {
  return (
    <>
      <Link href={`/pokemon/${pokemon.name}`} key={pokemon.id} className='flex flex-col items-center overflow-hidden'>
        <AspectRatio className='relative w-full bg-green-100 rounded-md' ratio={1}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            className="object-cover w-full h-full"
            fill
          />
        </AspectRatio>
        <h3 className="mt-2 font-bold text-center overflow-hidden">{pokemon.name}</h3>
      </Link>
    </>)
}
export default PokeCard