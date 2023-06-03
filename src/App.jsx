import { useState } from 'react'
import Card from './components/Card'
import './App.css'

let autoId = 0

function App() {
  const [nombre, setNombre] = useState('')
  const [color, setColor]= useState('')
  const [error, setError] = useState('')
  const [lista, setLista] = useState([])



  function onChangeNombre(e){
    setNombre(e.target.value)
  }
  function onChangeColor(e){
      setColor(e.target.value)
    }

  function onSubmit(e){
    e.preventDefault()
    if(nombre.trim().length < 3){
      setError('El nombre debe tener al menos 3 caracteres')
      return
    }
    if(color.trim().length < 4){
          setError('El color debe tener al menos 4 caracteres')
          return
    }
    else{
      setLista([...lista, {nombre, color, id : autoId++}])
      setNombre('')
      setColor('')
      setError('')  
    }
  }

  return (
    <>
      <div>
          <form onSubmit={onSubmit}>
            <div className='cardPrincipal'>
              <li className='lista'>
                <label htmlFor="nombre">
                  Ingrese su nombre: </label>
                <input 
                  type="text" 
                  placeholder='ingrese aqui su nombre'
                  value={nombre} 
                  onChange={onChangeNombre}
                />
              </li>
              <li className='lista'>
                <label htmlFor="color">
                    Ingrese su color favorito: 
                </label>
                <input 
                  type="text" 
                  placeholder='ingrese aqui su color'
                  value={color} 
                  onChange={onChangeColor}/>
              </li>
            </div>
            <button type='submit'>Enviar</button>
          </form>
          {error ? <p>{error}</p> : <Card lista={lista} setLista={setLista}/>}
      </div>
    </>
  )
}

export default App
