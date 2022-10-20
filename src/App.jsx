import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './partials/Container';
import Header from './partials/Header'
function App() {
  let ageV = 24  //
  //let number = 5 
  let [number, setNumber] = useState(0)
  let [mode, setMode] = useState('light')
  useEffect(() => {
    console.log(`EL NUMERO ESTA CAMBIANDO, LE VALOR: ${number}`)
    number % 2 === 0 ? setMode('light') : setMode('dark')
    return () => {
      console.log('DESTROY USE EFFECT')
    }
  }, [number])
  let addNumber = () => {
    setNumber(number + 1)
  }
  let multiplyNumber = () => {
    setNumber(number * 2)
  }
  let defalutNumber = () => {
    setNumber(0)
  }
  return (
    <React.Fragment>
      <div className="App">
        <Header name='Luis' age={ageV} gender='male' number={number} />
        <h1>Hello</h1>
        <button className='button-add' onClick={addNumber}>+</button>
        <button className='button-add' onClick={multiplyNumber}>*</button>
        <button className='button-add' onClick={defalutNumber}>R</button> 
        {number}
        {ageV > 20 && <div>Is major than 20</div>}
        <Container mode={mode}>
          <p>Inside the container</p>
        </Container>
      </div>
    </React.Fragment>);
}
export default App;