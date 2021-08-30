import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import DetailPokemon from './pages/DetailPokemon'
import MyPokemonList from './pages/MyPokemonList'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/pokemon/:name' exact component={DetailPokemon} />
      <Route path='/my-pokemon' exact component={MyPokemonList} />
      <Route path='/' render={() => <div>404</div>} />
    </Switch>
  )
}

export default App
