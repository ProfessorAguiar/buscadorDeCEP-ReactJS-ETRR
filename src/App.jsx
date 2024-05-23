import './App.css'
import axios from 'axios'
import { useState } from 'react'
export default function App() {
  const [CEP, setCEP] = useState('')
  const [endereco, setEndereco]=useState('')
  const [bairro, setBairro]=useState('')
  const [cidade, setCidade]=useState('')
  const [estado, setEstado]=useState('')
  function buscarCEP() {
    const options = {
      method: 'GET',
      url: `http://viacep.com.br/ws/${CEP}/json/`
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setEndereco(`Endereço: ${response.data.logradouro}`)
      setBairro(`Bairro: ${response.data.bairro}`)
      setCidade(`Cidade: ${response.data.localidade}`)
      setEstado(`Estado: ${response.data.uf}`)
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <>
      <div className='app'>
        <h1>Buscador de CEP</h1>
        <input type="text" onChange={e => { setCEP(e.target.value) }} />
        <button onClick={buscarCEP} className='buscar'>Buscar</button>
        <p>{endereco}</p>
        <p>{bairro}</p>
        <p>{cidade}</p>
        <p>{estado}</p>
      </div>
    </>
  )
}