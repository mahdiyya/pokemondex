import { React, useState, useEffect } from 'react'

function HeaderHome() {
  const [onScroll, setonScroll] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setonScroll(window.pageYOffset > 200),
      )
    }
    return () => {
      setonScroll({})
    }
  }, [])
  return (
    <header
      className={`header flex-wrap justify-content-between align-center ${
        onScroll ? 'onscroll' : ''
      }`}
    >
      <figure className='logo'>
        <img
          src='images/logo.png'
          alt='Logo PokemonDex'
          width='186'
          height='56'
          rel='preload prefetch'
        />
      </figure>
    </header>
  )
}

export default HeaderHome
