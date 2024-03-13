const PokemonDescription = ({pokemon} : any) => {
    return(
    <div className="p-4">
        <p className="text-black font-sans font-bold">Name: {pokemon?.name}</p>
        <p></p>
    </div>
    )
}

export default PokemonDescription;