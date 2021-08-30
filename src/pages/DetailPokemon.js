import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function DetailPokemon() {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState(undefined)
  const pokemonProvider = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
  })

  const getPokemon = async () => {
    const res = await pokemonProvider.get()
    const data = await res.data
    setPokemon(data)
    console.log(data)
  }

  useEffect(() => {
    getPokemon()
  }, [])
  return (
    <>
      <main className='app-container'>
        <Link to='/'>Back</Link>
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div className='detail-card'></div>
      </main>
    </>
  )
}

export default DetailPokemon
