import './RegisterForms.css';
import React, { useState, useEffect } from 'react';

function RegisterForms() {
  const [charCount, setCharCount] = useState(0);
  const [estados, setEstados] = useState([]);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({ logradouro: '', cidade: '', uf: '' });

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/ibge/uf/v1')
      .then((response) => response.json())
      .then((data) => setEstados(data))
      .catch((error) => console.error('Erro ao buscar estados:', error));
  }, []);

  const handleTextareaChange = (event) => {
    setCharCount(event.target.value.length);
  };

  const handleCepChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    setCep(value);
    if (value.length === 8) {
      fetch(`https://brasilapi.com.br/api/cep/v2/${value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('CEP não encontrado');
          }
          return response.json();
        })
        .then((data) => {
          setAddress({
            logradouro: data.street || '',
            cidade: data.city || '',
            uf: data.state || '',
          });
        })
        .catch((error) => {
          console.error('Erro ao buscar o CEP:', error);
          setAddress({ logradouro: '', cidade: '', uf: '' });
        });
    }
  };

  const handleAddressChange = (field, value) => {
    setAddress((prevAddress) => ({ ...prevAddress, [field]: value }));
  };

  return (
    <section className="firstFormBox">
      <a href="/">
        <img src="/assets/img/arrow.png" className="arrow" alt="Voltar" />
      </a>

      <h3 className="titleForm">Para começarmos, precisamos de alguns dados</h3>

      <input
        type="text"
        id="nameProp"
        className="inputSingle"
        placeholder="Nome do imóvel"
      />
      <label htmlFor="nameProp" className="descInput">
        O nome do imóvel será exibido na sua tela inicial e na reserva para o
        hóspede
      </label>

      <div className="textarea-container">
        <textarea
          id="descricao"
          maxLength="250"
          placeholder="Descrição"
          onChange={handleTextareaChange}
        ></textarea>
        <div className="char-counter">
          <span>{charCount}</span>/250
        </div>
      </div>

      <input
        type="text"
        id="inputCEP"
        value={cep}
        className="inputSingle"
        onChange={handleCepChange}
        maxLength={8}
        placeholder="CEP"
      />
      <input
        type="text"
        className="inputSingle"
        placeholder="Endereço"
        value={address.logradouro}
        onChange={(e) => handleAddressChange('logradouro', e.target.value)}
      />

      <div id="numberComp">
        <input type="number" className="doubleInput" placeholder="Número" />
        <input type="text" className="doubleInput" placeholder="Complemento" />
      </div>

      <div id="cityState">
        <input
          type="text"
          className="cityInput"
          placeholder="Cidade"
          value={address.cidade}
          onChange={(e) => handleAddressChange('cidade', e.target.value)}
        />
        <select
          id="uf"
          className={`stateInput ${address.uf ? 'selected' : ''}`}
          value={address.uf}
          onChange={(e) => handleAddressChange('uf', e.target.value)}
        >
          <option value="" disabled>
            UF
          </option>
          {estados.map((estado) => (
            <option key={estado.sigla} value={estado.sigla}>
              {estado.sigla}
            </option>
        ))}
      </select>

      </div>

      <button className="continueButton">Continuar</button>
    </section>
  );
}

export default RegisterForms;
