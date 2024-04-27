import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Home from './Home';
import Header from './Components/Header';



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

