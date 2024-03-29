'use server'

import { RequestInfo } from "undici-types";

export const fetchPokemonWithImages = async (limit = 40) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('No se pudo obtener los datos de la API');

    const data = await response.json();
    const pokemonList = data.results;

    // Obtener detalles de cada Pokémon para acceder a sus imágenes
    const pokemonDetailsPromises = pokemonList.map((pokemon: any) => fetch(pokemon.url));
    const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);
    const pokemonDetails = await Promise.all(pokemonDetailsResponses.map((res) => res.json()));

    // Extraer URL de la imagen frontal por defecto de cada Pokémon
    const pokemonWithImages = pokemonDetails.map((pokemon) => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default
    }));

    console.log(pokemonWithImages);
    return pokemonWithImages;
  } catch (error) {
    console.error('Error al obtener los Pokémon con imágenes:', error);
  }
};


export const fetchPokemon = async (pokemonName: string) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
  // const delayTime = Math.random() * (5000 - 3000) + 3000; 
  // await delay(delayTime);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`No se pudo obtener el Pokémon: ${pokemonName}`);

    const data = await response.json();
    const { sprites } = data;
    const spriteUrls = [
      { url: sprites.other["official-artwork"].front_default, altText: `Imagen oficial de ${data.name}` },
      { url: sprites.back_default, altText: `Imagen trasera de ${data.name}` },
      { url: sprites.back_female, altText: `Imagen trasera femenina de ${data.name}` },
      { url: sprites.back_shiny, altText: `Imagen trasera brillante de ${data.name}` },
      { url: sprites.back_shiny_female, altText: `Imagen trasera brillante femenina de ${data.name}` },
      { url: sprites.front_default, altText: `Imagen frontal de ${data.name}` },
      { url: sprites.front_female, altText: `Imagen frontal femenina de ${data.name}` },
      { url: sprites.front_shiny, altText: `Imagen frontal brillante de ${data.name}` },
      { url: sprites.front_shiny_female, altText: `Imagen frontal brillante femenina de ${data.name}` }
    ];

    // Filtrar para incluir solo los sprites que existen
    const images = spriteUrls.filter(sprite => sprite.url !== null);
    const pokemon = {
      name: data.name,
      data: data,
      images
    };

    return pokemon;
  } catch (error) {
    console.error('Error al obtener el detalle del Pokémon:', error);
    return null; // Asegúrate de manejar este caso null en tu componente
  }
}


export const fetchPokemonTeam = async ({ types = "Fire,Ghost", limit = 40 }: { types: string, limit: number }) => {
  try {
    const delayTime = Math.random() * (4000 - 2000) + 1000;
    await new Promise(resolve => setTimeout(resolve, delayTime));
    let filteredPokemons: any = [];

    if (types.length > 0) {
      const typesArray = types.split(',');
      console.log("typesArray", typesArray);
      for (const type of typesArray) {
        const url = `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`No se pudo obtener los datos para el tipo ${type}`);

        const data = await response.json();
        const pokemonsOfType = data.pokemon.map((pokemon: { pokemon: any; }) => pokemon.pokemon);
        filteredPokemons = [...filteredPokemons, ...pokemonsOfType];
      }
    }

    filteredPokemons = Array.from(new Map(filteredPokemons.map((pokemon: { name: any; }) => [pokemon.name, pokemon])).values());

    if (limit < filteredPokemons.length) {
      filteredPokemons = filteredPokemons.sort(() => 0.5 - Math.random()).slice(0, limit);
    }

    const pokemonDetailsPromises = filteredPokemons.map((pokemon: { url: RequestInfo; }) => fetch(pokemon.url));
    const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);
    const pokemonDetails = await Promise.all(pokemonDetailsResponses.map(res => res.json()));

    const pokemonWithImages = pokemonDetails.map(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      type: types
    }));
    console.log("pokemonWithImages", pokemonWithImages);
    return pokemonWithImages;
  } catch (error) {
    console.error('Error al obtener los Pokémon con imágenes:', error);
    return [];
  }
};
