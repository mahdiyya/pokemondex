import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='nav bottom flex-wrap align-center justify-space-between'>
      <Link className='nav-link' to='/'>
        <img src='images/home.svg' alt='Home Icon' />
      </Link>
      <Link className='nav-link' to='/my-pokemon'>
        <img src='images/my-list.svg' alt='My List Icon' />
      </Link>
    </nav>
  )
}

export default Navigation
