import React from 'react'

const PokemonCard = ({ id, name, image, type }) => {
  return (
    <figure
      className={`card rounded flex-wrap justify-space-between align-center ${type}`}
    >
      <img src={image} alt={name} />
      <figcaption className='caption-left'>
        <h3 className='title'>{name}</h3>
        <p className='subtitle'>
          <span>Owned : </span>
          <b>0</b>
        </p>
        <img
          src='../images/circle-card.svg'
          alt='circle acc'
          className='circle-acc'
        />
      </figcaption>
    </figure>
  )
}

export default PokemonCard
