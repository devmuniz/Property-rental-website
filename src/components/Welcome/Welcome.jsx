import React, { useState } from 'react'
import './Welcome.css'

function Welcome() {
  const [selectedButton, setSelectedButton] = useState('allFlats') // Estado p controlar o botão ativo

  return (
    <div className='flatsOptions'>
      <h1>Bem vindo, Raphael!</h1>
      <div className='optionWelcome'>

        <button
          className={`allFlatsBtn ${selectedButton === 'allFlats' ? 'activeBtn' : ''}`}
          onClick={() => setSelectedButton('allFlats')}>
          Todos os flats
        </button>
        <button
          className={`unvailableBtn ${selectedButton === 'unavailable' ? 'activeBtn' : ''}`}
          onClick={() => setSelectedButton('unavailable')}>
          Indisponíveis
        </button>
      </div>
    </div>
  )
}

export default Welcome
