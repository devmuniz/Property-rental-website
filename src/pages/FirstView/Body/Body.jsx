  import React, { useState, useEffect } from 'react'
  import './Body.css'

  function Body() {
    const [charCount, setCharCount] = useState(0)
    const [estados, setEstados] = useState([])
    const [cep, setCep] = useState('')

    
    useEffect(() => {
      fetch('https://brasilapi.com.br/api/ibge/uf/v1')
        .then((response) => response.json())
        .then((data) => setEstados(data))
        .catch((error) => console.error('Erro ao buscar estados:', error))
    }, [])

    const handleTextareaChange = (event) => {
      setCharCount(event.target.value.length)
    }

    const handleCepChange = (event) => {
      let value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen no formato XXXXX-XXX
      }
      setCep(value);
    };

    return (

      <body id='bodyContent'>
      <section className="firstFormContainer">
        <section className="firstFormBox">

          <a href="/"><img src={"../src/assets/img/arrow.png"} className='arrow'/></a>

          <h3 className="titleForm">Para começarmos, precisamos de alguns dados</h3>

          <input type="text" id="nameProp" className='inputSingle' placeholder="Nome do imóvel" />
          <label htmlFor="nameProp" className="descInput">
            O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
          </label>

          <div className="textarea-container">
            <textarea id="descricao" maxLength="250" placeholder="Descrição"  onChange={handleTextareaChange}> 
            </textarea>
            <div className="char-counter">
              <span>{charCount}</span>/250
            </div>
          </div>

          <input
            type="text"
            id="inputCEP"
            value={cep}
            className='inputSingle'
            onChange={handleCepChange}
            maxLength={9} // Limita o input a 9 caracteres (incluindo o hífen)
            placeholder="CEP"
        />
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

      </body>
    )
  }

  export default Body;
