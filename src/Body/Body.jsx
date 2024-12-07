import React, { useState, useEffect } from 'react';
import './Body.css';

function Body() {
  const [charCount, setCharCount] = useState(0)
  const [estados, setEstados] = useState([]);

  // Função para buscar estados da API
  useEffect(() => {
    fetch('https://brasilapi.com.br/api/ibge/uf/v1')
      .then((response) => response.json())
      .then((data) => setEstados(data))
      .catch((error) => console.error('Erro ao buscar estados:', error))
  }, [])

  const handleTextareaChange = (event) => {
    setCharCount(event.target.value.length)
  }

  return (
    <section className="firstFormContainer">
      <section className="firstFormBox">

        <a href="/"><img src={"../src/assets/img/arrow.png"} className='arrow'/></a>

        <h3 className="titleForm">Para começarmos, precisamos de alguns dados</h3>

        <input type="text" id="nameProp" className='inputSingle' placeholder="Nome do imóvel" />
        <label htmlFor="nameProp" className="descInput">
          O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
        </label>

        <div className="textarea-container">
          <textarea id="descricao" maxLength="250" placeholder="Descrição" onChange={handleTextareaChange}> 
          </textarea>
          <div className="char-counter">
            <span>{charCount}</span>/250
          </div>
        </div>

        <input type="text" className='inputSingle' id="inputCEP" placeholder="CEP" />
        <input type="text" className='inputSingle' placeholder="Endereço" />
   
        <div id='numberComp'>
            <input type="number" className='doubleInput' placeholder="Número" />
            <input type="text" className='doubleInput' placeholder="Complemento" />     
        </div>

        <div id='cityState'>
            <input type="text" className='cityInput' placeholder="Cidade" />
            
            <select id="uf"  className="stateInput">
          <option value="" disabled selected>
            UF
          </option>
          {estados.map((estado) => (
            <option key={estado.sigla} value={estado.sigla}>
              {estado.sigla}
            </option>
          ))}
        </select>
        
        </div>

        <button className='continueButton'>Continuar</button>

      </section>
    </section>
  )
}

export default Body;
