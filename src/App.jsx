import { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Header from './Components/Header';
import axios from 'axios';


export default function App() {

  useEffect(() => {
    getDados()
  }, [])

  const getDados = async () => {
    const response = await axios.get('http://localhost:3333/SNAP')

    console.log(response.data)
  }

  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

