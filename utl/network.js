import axios from "axios";

export const getAllPokemon = async () => {
  const options = {
    method: 'post',
    url: 'https://graphqlpokemon.favware.tech/',
    data: {
      query: `{
        getAllPokemonSpecies(offset: 69 take: 229 reverse: false)
      }`
    },
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const req = await axios(options)
  return req.data.data.getAllPokemonSpecies
} 

export const getPokemon = () => {
  const options = {
    method: 'post',
    url: 'https://graphqlpokemon.favware.tech/',
    data: {
      query: `{
        getPokemon(pokemon: pikachu reverseFlavorTexts: true takeFlavorTexts: 1) {
          num
          species
          types
          abilities { first second hidden }
          baseStats { hp attack defense specialattack specialdefense speed }
          gender { male female }
          height
          weight
          flavorTexts { game flavor }
          evYields { hp attack defense specialattack specialdefense speed }
          isEggObtainable
          minimumHatchTime
          maximumHatchTime
          levellingRate
          sprite
          shinySprite
          backSprite
          shinyBackSprite
          smogonTier
          smogonPage
          serebiiPage
          bulbapediaPage
        }
      }`
    },
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const req = axios(options).then(res => {
    return res.data
  })
  return req
}

module.exports = {
  getAllPokemon,
  getPokemon
}