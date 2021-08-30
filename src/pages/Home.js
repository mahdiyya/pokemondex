import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'
import HeaderHome from '../components/HeaderHome.js'
import Navigation from '../components/Navigation'

function Home() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon')
  const pokemonData = axios.create({
    baseURL: loadMore,
  })

  const getAllPokemons = async () => {
    const res = await pokemonData.get()
    const data = await res.data

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await pokemonData.get(`/${pokemon.name}`)
        const data = res.data

        setAllPokemons((currentList) => [...currentList, data])
      })
    }

    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className='app-container'>
      <HeaderHome />
      <main>
        <h1 className='sr-only'>PokemonDex</h1>
        <h2 className='sr-only'>Pokemon List</h2>
        <section className='card-list'>
          {allPokemons.map((pokemon, index) => (
            <Link
              to={`/pokemon/${pokemon.name}`}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            >
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            </Link>
          ))}
        </section>
        <div className='flex-wrap justify-space-between'>
          <button className='btn normal'>Load More</button>
        </div>
      </main>
      <Navigation />
    </div>
  )
}

export default Home
