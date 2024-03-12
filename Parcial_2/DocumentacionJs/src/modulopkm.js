const jsdoc = require('jsdoc-api');
const fs = require('fs');

/**
 * @file modulopkm.js
 * @module modulopkm
 * @description Este módulo contiene la función ObtienePokemon que retorna un pokemon aleatorio.
 * @param {string} nombre - Nombre del pokemon.
 * @param {string} imagen - Imagen del pokemon.
 * @requires jsdoc-api
 * @requires fs
 * @version 1.0
 * @exports ObtienePokemon
 * @example
 * const ObtienePokemon = require('./modulopkm');
 * let (Nombre, Imagen) = ObtienePokemon();
 * console.log(`Nombre: ${nombre}, Imagen: ${imagen}`);
 * // { nombre: "Bulbasaur", imagen: "https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png" }
 * @see
 * {@link https://www.npmjs.com/package/jsdoc-api}
 * {@link https://nodejs.org/api/fs.html}
 */
let pokemons = [
    { nombre: "Bulbasaur", imagen: "https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png" },
    { nombre: "Ivysaur", imagen: "https://img.pokemondb.net/sprites/x-y/normal/ivysaur.png" },
    { nombre: "Venusaur", imagen: "https://img.pokemondb.net/sprites/x-y/normal/venusaur.png" },
    { nombre: "Charmander", imagen: "https://img.pokemondb.net/sprites/x-y/normal/charmander.png" },
    { nombre: "Charmeleon", imagen: "https://img.pokemondb.net/sprites/x-y/normal/charmeleon.png" },
    { nombre: "Charizard", imagen: "https://img.pokemondb.net/sprites/x-y/normal/charizard.png" },
    { nombre: "Squirtle", imagen: "https://img.pokemondb.net/sprites/x-y/normal/squirtle.png" },
    { nombre: "Wartortle", imagen: "https://img.pokemondb.net/sprites/x-y/normal/wartortle.png" },
    { nombre: "Blastoise", imagen: "https://img.pokemondb.net/sprites/x-y/normal/blastoise.png" },
    { nombre: "Caterpie", imagen: "https://img.pokemondb.net/sprites/x-y/normal/caterpie.png" },
    { nombre: "Metapod", imagen: "https://img.pokemondb.net/sprites/x-y/normal/metapod.png" },
    { nombre: "Butterfree", imagen: "https://img.pokemondb.net/sprites/x-y/normal/butterfree.png" },
    { nombre: "Weedle", imagen: "https://img.pokemondb.net/sprites/x-y/normal/weedle.png" },
    { nombre: "Kakuna", imagen: "https://img.pokemondb.net/sprites/x-y/normal/kakuna.png" },
    { nombre: "Beedrill", imagen: "https://img.pokemondb.net/sprites/x-y/normal/beedrill.png" },
    { nombre: "Pidgey", imagen: "https://img.pokemondb.net/sprites/x-y/normal/pidgey.png" },
    { nombre: "Pidgeotto", imagen: "https://img.pokemondb.net/sprites/x-y/normal/pidgeotto.png" },
    { nombre: "Pidgeot", imagen: "https://img.pokemondb.net/sprites/x-y/normal/pidgeot.png" },
];

function ObtienePokemon(){
    return pokemons[Math.floor(Math.random() * pokemons.length)];
} 

module.exports = ObtienePokemon; // Exporta la función ObtienePokemon