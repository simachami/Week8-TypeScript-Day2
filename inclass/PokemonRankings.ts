class PokemonRankings {
    [pokemonName:string]: number
}


const pokemonR = new PokemonRankings()

pokemonR.snorlax = 10
pokemonR.psyduck = 1

//error - value must be number 
//pokemonR.magikarp = 'underrated'

console.table(pokemonR)