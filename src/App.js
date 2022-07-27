import { useState } from 'react';
import './App.css';
import Personajes from './components/Personajes';
import rick from './img/rick-morty.png'
function App() {
  const [personajes, setPersonaje] = useState(null)

  const reqApi = async ()=> {
    let url = await fetch("https://rickandmortyapi.com/api/character")
    let datos = await url.json()
    console.log(datos.results)
    setPersonaje(datos.results)
  }
  return (
    <div className="App">
      <div className='App-header'>
      <h1 className='title'>Rick & Morty</h1>
      { //como personase esta vacio se realiza la segunda accion la cual carga el boton y la imagen 
        personajes ?  <Personajes personajes={personajes} setPersonaje={setPersonaje}/> :
        <>
         <img src={rick} className='img-home' alt='rick' />
        <button onClick={reqApi} className='btn-search'>Ver personajes</button>
        </>
      }
     
     </div>
     
    </div>
  );
}

export default App;
