import { useEffect, useState, useContext, createContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Header from './Components/Header';
import axios from 'axios';

export const AppContext = createContext({})

export default function App() {
  const [investigado, setInvestigado] = useState()
  const [telefones, setTelefones] = useState([])
  const [emails, setEmails] = useState([])
  const [vinculos, setVinculos] = useState([])
  const [empresas, setEmpresas] = useState([])
  const [enderecos, setEnderecos] = useState([])

  useEffect(() => {
    getDados()
  }, [])

  const getDados = async () => {
    try {
      const response = await axios.get('http://localhost:3333/SNAP')

      console.log(response.data)
      adaptarDadosInvestigado(response.data)
      setTelefones(response.data[0].telefone)
      setEmails(response.data[0].email)
      adaptarDadosVinculos(response.data)
      setEmpresas(response.data[0].empresa)
      setEnderecos(response.data[0].endereco)
    } catch (error) {
      console.log(error)
    }
  }

  const adaptarDadosInvestigado = (dados) => {
    dados[0].pessoa.map((value) => {
      if (value.bookmark !== undefined) {
        setInvestigado(value)
      }
    })
  }

  const adaptarDadosVinculos = (dados) => {
    var array = []

    dados[0].pessoa.map((value) => {
      if (value.bookmark == undefined) {
        array.push(value)
      }
    })

    setVinculos(array)
  }

  console.log(vinculos)

  return (
    <AppContext.Provider value={{
      investigado,
      telefones,
      emails,
      vinculos,
      empresas,
      enderecos
    }}>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

